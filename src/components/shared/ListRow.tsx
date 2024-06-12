import Text from "./Text";
import Flex from "./Flex";

import { css } from "@emotion/react";

interface ListRowProps {
  left?: React.ReactNode;
  contents: React.ReactNode;
  right?: React.ReactNode;
  withArrow?: boolean;
  onClick?: () => void;
  as?: "div" | "li";
}

function ListRow({
  as = "li",
  left,
  contents,
  right,
  withArrow,
  onClick,
}: ListRowProps) {
  return (
    <Flex as={as} css={listRowContainerStyles} onClick={onClick} align="center">
      <Flex css={listRowLeftStyles}>{left}</Flex>
      <Flex css={listRowCotentsStyles}>{contents}</Flex>
      <Flex>{right}</Flex>
      {withArrow ? <IconArrowRights /> : null}
    </Flex>
  );
}
const listRowContainerStyles = css`
  padding: 8px;
`;
const listRowLeftStyles = css`
  margin-right: 14px;
`;
const listRowCotentsStyles = css`
  flex: 1;
`;

function ListRowTexts({
  title,
  subTitle,
}: {
  title: string;
  subTitle: string;
}) {
  return (
    <Flex direction="column">
      <Text bold={true}>{title}</Text>
      <Text typography="t7">{subTitle}</Text>
    </Flex>
  );
}

function IconArrowRights() {
  return (
    <svg
      height="20px"
      id="Layer_1"
      version="1.1"
      viewBox="0 0 512 512"
      width="20px"
    >
      <polygon points="160,115.4 180.7,96 352,256 180.7,416 160,396.7 310.5,256 " />
    </svg>
  );
}

ListRow.Texts = ListRowTexts;
export default ListRow;
