import ListRow from "../components/shared/ListRow";
import Badge from "../components/shared/Badge";

import { useQuery, useInfiniteQuery } from "react-query";
import { getCards } from "@remote/card";
import { flatten } from "lodash";
import InfiniteScroll from "react-infinite-scroll-component";
import { useCallback } from "react";

export default function CardList() {
  const {
    data,
    hasNextPage = false,
    fetchNextPage,
    isFetching,
  } = useInfiniteQuery(
    ["cards"],
    ({ pageParam }) => {
      return getCards(pageParam);
    },
    {
      //getCards로 호출 한 값이 getNextPageParam로 들어오게됨
      getNextPageParam: (snapshot) => {
        return snapshot.lastVisible;
        //호출했던 마지막 커서가 getCards로 흘러들어오게 됨
      },
    }
  );

  const cards = flatten(data?.pages.map(({ items }) => items));
  //배열안에 배열을 하나로 만들어주기 위함

  const loadMore = useCallback(() => {
    if (hasNextPage === false || isFetching) return;

    fetchNextPage();
  }, [fetchNextPage, hasNextPage, isFetching]);

  if (data == null) {
    return null;
  }

  return (
    <div>
      <InfiniteScroll
        dataLength={cards.length}
        hasMore={hasNextPage}
        loader={<></>}
        next={loadMore}
        scrollThreshold="100px"
      >
        <ul>
          {cards.map((card, index) => {
            return (
              <ListRow
                key={card.id}
                contents={
                  <ListRow.Texts
                    title={`${index + 1}위`}
                    subTitle={card.name}
                  />
                }
                right={
                  card.payback != null ? <Badge label={card.payback} /> : null
                }
                withArrow={true}
              />
            );
          })}
        </ul>
      </InfiniteScroll>
    </div>
  );
}
