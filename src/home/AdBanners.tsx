import Flex from "../components/shared/Flex";
import Text from "../components/shared/Text";

import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Swiper, SwiperSlide } from "swiper/react";

import { colors } from "@styles/colorPalette";
import { getAdBanners } from "../remote/adBanner";

import { Link } from "react-router-dom";
import { useQuery } from "react-query";

import "swiper/css";

function AdBanners() {
  const { data } = useQuery(["adBanners"], () => getAdBanners());
  return (
    <Contaienr>
      <Swiper spaceBetween={8}>
        {data?.map((banner) => {
          return (
            <SwiperSlide key={banner.id}>
              <Link to={banner.link}>
                <Flex direction="column" css={baneerContainerStyles}>
                  <Text bold={true}>{banner.title}</Text>
                  <Text typography="t7">{banner.description}</Text>
                </Flex>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Contaienr>
  );
}
const Contaienr = styled.div`
  padding: 24px;
`;
const baneerContainerStyles = css`
  padding: 16px;
  background-color: ${colors.grey};
  border-radius: 4px;
`;
export default AdBanners;
