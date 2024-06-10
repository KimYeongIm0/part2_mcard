import Top from "@shared/Top";
import AdBanners from "../home/AdBanners";
import CardList from "../home/CardList";

import { useEffect } from "react";

function Home() {
  return (
    <div>
      <Top
        title="헤택 좋은 카드"
        subTitle="회원님을 위한 알짜 혜택 카드 모음"
      />
      <AdBanners />
      <CardList />
    </div>
  );
}

export default Home;
