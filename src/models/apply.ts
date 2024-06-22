import { User } from "./user";

export interface Term {
  id: string;
  link?: string;
  title: string;
}

export const APPLY_STATUS = {
  REDAY: "REDAY",
  PROGRESS: "PROGRESS",
  COMPLETE: "COMPLETE",
  REJECT: "REJECT",
} as const;
