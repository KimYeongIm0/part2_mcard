import { COLLECTIONS } from "./../constants/index";
//getDoc : 전체문서 가져오기
import {
  collection,
  getDocs,
  getDoc,
  doc,
  query,
  QuerySnapshot,
  limit,
  startAfter,
} from "firebase/firestore";
import { store } from "./firebase";
import { Card } from "../models/card";

//pageParam 지금 보이고있는 맨 마지막 요소
export async function getCards(pageParam?: QuerySnapshot<Card>) {
  const cardQuery =
    pageParam == null
      ? query(collection(store, COLLECTIONS.CARD), limit(10))
      : query(
          collection(store, COLLECTIONS.CARD),
          startAfter(pageParam),
          limit(20)
        );

  const cardSnapshot = await getDocs(cardQuery);

  const lastVisible = cardSnapshot.docs[cardSnapshot.docs.length - 1];

  const items = cardSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Card), //Card 형식으로 형변환하는 작업을 수행
  }));
  return { items, lastVisible };
}

export async function getCard(id: string) {
  const snapshot = await getDoc(doc(store, COLLECTIONS.CARD, id));

  return {
    id,
    ...(snapshot.data() as Card),
  };
}
