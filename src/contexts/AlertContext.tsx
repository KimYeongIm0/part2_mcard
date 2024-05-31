import { ComponentProps, useContext, createContext } from "react";

import { createPortal } from "react-dom";

import Alert from "@shared/Alert";

type AlertProps = ComponentProps<typeof Alert>;
// ComponentProps를 사용하면 알럿의 프롭스를 추출해 줄 수 있다
type AlertOptions = Omit<AlertProps, "open">;
//AlertProps에서 open을 제외한다

interface AlertContextValue {
  open: (options: AlertOptions) => void;
}

const Context = createContext<AlertContextValue | undefined>(undefined);
