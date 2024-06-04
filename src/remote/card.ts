import { COLLECTIONS } from "./../constants/index";
//getDoc : 전체문서 가져오기
import { collection, getDocs } from "firebase/firestore";
import { store } from "./firebase";
import { Card } from "../models/card";

export async function getCards() {
  const cardSnapshot = await getDocs(collection(store, COLLECTIONS.CARD));

  return cardSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Card), //Card 형식으로 형변환하는 작업을 수행
  }));
}
