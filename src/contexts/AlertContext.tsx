import {
  ComponentProps,
  useContext,
  createContext,
  useState,
  useCallback,
  useMemo,
} from "react";

import { createPortal } from "react-dom";

import Alert from "@shared/Alert";

// ComponentProps를 사용하면 알럿의 프롭스를 추출해 줄 수 있다
type AlertProps = ComponentProps<typeof Alert>;
//AlertProps에서 open을 제외한다
type AlertOptions = Omit<AlertProps, "open">;

interface AlertContextValue {
  open: (options: AlertOptions) => void;
}

const Context = createContext<AlertContextValue | undefined>(undefined);

//AlertProps 타입의 기본값을 설정하는 상수 defaultValue를 선언
const defaultValue: AlertProps = {
  open: false,
  titke: null,
  description: null,
  onButtonClick: () => {},
};

function AlertContextProvider({ children }: { children: React.ReactDOM }) {
  const [alertState, setAlertState] = useState(defaultValue);
  const $portal_root = document.getElementById("root-portal");

  const close = useCallback(({ ...options }: AlertOptions) => {
    setAlertState(defaultValue);
  }, []);

  const open = useCallback(
    ({ onButtonClick, ...options }: AlertOptions) => {
      setAlertState({
        ...options,
        // 기존 콜백 함수를 그대로 사용하여 onButtonClick을 호출한다면, 해당 콜백 함수 내에서 close 함수를 직접 호출하는 것이므로 close 함수의 변경이 감지되어 componentDidUpdate 순환에 빠질 수 있습니다. 이는 무한 루프를 발생시키고 프로그램이 비정상적으로 동작하게 할 수 있습니다.
        onButtonClick: () => {
          close();
          onButtonClick();
        },
        open: true,
      });
    },
    [close]
  );

  const values = useMemo(() => ({ open }), [open]);
  return (
    //Context.Provider=> 리액트 컴포넌트에서 Props가 아닌 또 다른 방식으로 컴포넌트간에 값을 전달하는 방법
    <Context.Provider>
      {children}
      {$portal_root !== null
        ? createPortal(<Alert {...alertState} />, $portal_root)
        : null}
    </Context.Provider>
  );
}
