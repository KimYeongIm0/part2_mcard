import { COLLECTIONS } from "./../constants/index";
//getDoc : 전체문서 가져오기
import { collection, getDocs } from "firebase/firestore";
import { store } from "./firebase";
import { AdBanner } from "../models/card";

export async function getAdBanners() {
  const adBannerSnapshot = await getDocs(
    collection(store, COLLECTIONS.ADBANNER)
  );

  return adBannerSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as AdBanner), //AdBanner 형식으로 형변환하는 작업을 수행
  }));
}
