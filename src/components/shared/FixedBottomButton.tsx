import { css, keyframes } from "@emotion/react";
import styled from "@emotion/styled";

import { createPortal } from "react-dom";

import Button from "./Button";
import { colors } from "../../styles/colorPalette";

interface FixedBottomButtonProps {
  label: string;
  onClick: () => void;
}

function FixedBottomButton({ label, onClick }: FixedBottomButtonProps) {
  const $portalRoot = document.getElementById("root-portal");

  if ($portalRoot == null) {
    return null;
  }

  return createPortal(
    <Container>
      <Button full={true} onClick={onClick} css={buttonStyles}>
        {label}
      </Button>
    </Container>,
    $portalRoot
  );
}
const slideup = keyframes`
  to {
    transform: translateY(0)
  }
`;
const Container = styled.div`
  position: fixed;
  //left,right: 양 옆을 꽉 채운다
  left: 0;
  right: 0;
  //아래에 붙이기
  bottom: 0;
  background-color: ${colors.white};
  padding: 20px 10px 8px;
  transform: translateY(100%); //100%라면 아예 안 보임
  animation: ${slideup} 0.5s ease-in-out forwards; //forwards설정이 없으면 다시 translateY(100%)으로 돌아감
`;

const buttonStyles = css`
  border-radius: 8px;
`;

export default FixedBottomButton;
