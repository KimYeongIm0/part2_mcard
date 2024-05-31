import { colors } from "@styles/colorPalette";
import styled from "@emotion/styled";

const Input = styled.input`
  padding: 0 16px;
  height: 15px;
  font-weight: 500;
  border: 1px solid ${colors.grey};
  border-radius: 6px;
  width: 100%;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: ${colors.blue};
  }

  &[aria-invalid="true"] {
    border-color: ${colors.red};
  }
`;

export default Input;
