import { InputHTMLAttributes, forwardRef, useState } from "react";
import Text from "./Text";
import Input from "./Input";

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode;
  hasError?: boolean;
  helpMessage?: boolean;
}
//forwardRef : ref prop을 넘겨서 그 내부에 있는 HTML 엘리먼트에 접근가능하게 해준다
const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  function TextField(
    { label, helpMessage, hasError, onFocus, onBlur, ...props },
    ref
  ) {
    const [focused, setFocused] = useState(false);

    const labelColor = hasError ? "red" : focused ? "blue" : undefined;

    const handleFocus: React.FocusEventHandler<HTMLInputElement> = (event) => {
      setFocused(true);
      onFocus?.(event);
    };
    const handleBlur: React.FocusEventHandler<HTMLInputElement> = (event) => {
      setFocused(false);
      onFocus?.(event);
    };

    return (
      <div>
        {label ? (
          <Text
            typography="t7"
            color={labelColor}
            display="inline-block"
            style={{ marginBottom: 6 }}
          >
            {label}
          </Text>
        ) : null}
        <Input
          ref={ref}
          aria-invalid={hasError}
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...props}
        />
        {helpMessage ? (
          <Text
            typography="t7"
            color={labelColor}
            display="inline-block"
            style={{ marginTop: 6, fontSize: 12 }}
          >
            {helpMessage}
          </Text>
        ) : null}
      </div>
    );
  }
);

export default TextField;
