import { Term } from "../models/apply";

export const 약관목록 = [
  {
    id: "01",
    title: "카드신청 관련 안내 및 필수 동의",
  },
  {
    id: "02",
    title: "(필수) 개인정보 요약동의서",
    link: "https://velog.io/@turret1234/React-Axios-%EC%BB%A4%EC%8A%A4%ED%85%80%EC%9C%BC%EB%A1%9C-jwt%ED%86%A0%ED%81%B0-%EC%9E%AC%EB%B0%9C%EA%B8%89",
  },
] as Term[]; //term의 배열임을 알려줌

export const 연소득옵션 = [
  { label: "600만원 ~ 5,000만원", value: "600만원 ~ 5,000만원" },
  { label: "5,000만원 ~ 1억원", value: "5,000만원 ~ 1억원" },
  { label: "1억원 초과", value: "1억원 초과" },
] as Option[];

export const 신용점수옵션 = [
  { label: "600점 이상", value: "600점 이상" },
  { label: "600점 미만", value: "600점 미만" },
] as Option[];

export const 결제일옵션 = [
  { label: "1일", value: "1일" },
  { label: "25일", value: "25일" },
] as Option[];
