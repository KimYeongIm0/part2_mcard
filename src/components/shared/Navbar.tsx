import { css } from "@emotion/react";

import Flex from "@shared/Flex";
import { Link, useLocation } from "react-router-dom";
import { colors } from "../../styles/colorPalette";

import Button from "@shared/Button";

export default function Navbar() {
  const loaction = useLocation();
  const showSignButton =
    ["/signup", "/signin"].includes(loaction.pathname) === false;
  return (
    <Flex justify="space-between" align="center" css={navbarContainerStlyes}>
      <Link to="/">홈</Link>
      {showSignButton ? (
        <Link to="/signin">
          <Button>로그인/회원가입</Button>
        </Link>
      ) : null}
    </Flex>
  );
}

const navbarContainerStlyes = css`
  padding: 10px 24px;
  position: sticky;
  top: 0;
  background-color: ${colors.white};
  z-index: 10;
  border-bottom: 1px solid ${colors.grey};
`;
