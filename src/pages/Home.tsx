import Top from "@shared/Top";

import { useEffect } from "react";

import { getCards } from "@remote/card";
import { getAdBanners } from "@remote/adBanner";

function Home() {
  useEffect(() => {
    getCards().then((res) => {
      console.log(res);
    });

    getAdBanners().then((res) => {
      console.log(res);
    });
  }, []);
  return (
    <div>
      <Top
        title="헤택 좋은 카드"
        subTitle="회원님을 위한 알짜 혜택 카드 모음"
      />
    </div>
  );
}

export default Home;
