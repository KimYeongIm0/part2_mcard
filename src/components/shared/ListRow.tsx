import Text from "./Text";
import Flex from "./Flex";

import { css } from "@emotion/react";

interface ListRowProps {
  left?: React.ReactNode;
  contents: React.ReactNode;
  right?: React.ReactNode;
  withArrow?: boolean;
  onClick: () => void;
}

function ListRow({ left, contents, right, withArrow }: ListRowProps) {
  return (
    <Flex as="li" css={listRowContainerStyles}>
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
      <Text bold={true}></Text>
      <Text typography="t7"></Text>
    </Flex>
  );
}

function IconArrowRights() {
  return (
    <svg
      height="512px"
      id="Layer_1"
      style="enable-background:new 0 0 512 512;"
      version="1.1"
      viewBox="0 0 512 512"
      width="512px"
    >
      <polygon points="160,115.4 180.7,96 352,256 180.7,416 160,396.7 310.5,256 " />
    </svg>
  );
}

ListRow.Texts = ListRowTexts;
export default ListRow;
