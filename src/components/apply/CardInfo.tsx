import { useState, useCallback, MouseEvent } from "react";

import Button from "@shared/Button";
import Spacing from "../shared/Spacing";
import FixedBottomButton from "@shared/FixedBottomButton";

import { ApplyValues } from "../../models/apply";

type CardInfoValues = Pick<ApplyValues, "isHipass" | "isMaster" | "isRf">;

export default function CardInfo({
  onNext,
}: {
  onNext: (cardInfoValues: CardInfoValues) => void;
}) {
  const [cardInfoValues, setCardInfoValues] = useState<CardInfoValues>({
    isHipass: false,
    isMaster: false,
    isRf: false,
  });

  const { isHipass, isMaster, isRf } = cardInfoValues;

  const handleButtonClick = useCallback((e: MouseEvent<HTMLButtonElement>) => {
    const $button = e.target as HTMLButtonElement;

    setCardInfoValues((prevValues) => ({
      ...prevValues,
      [$button.name]: JSON.parse($button.dataset.value as string),
    }));
  }, []);

  return (
    <div>
      <Button.Group title="해외결제">
        <Button
          name="isMaster"
          weak={isMaster === false}
          size="medium"
          data-value={true}
          onClick={handleButtonClick}
        >
          Master
        </Button>
        <Button
          name="isMaster"
          weak={isRf === true}
          size="medium"
          data-value={false}
          onClick={handleButtonClick}
        >
          국내전용
        </Button>
      </Button.Group>
      <Spacing size={12} />
      <Button.Group title="후불교통카드 가능">
        <Button
          name="isRf"
          weak={isRf === true}
          size="medium"
          data-value={true}
          onClick={handleButtonClick}
        >
          신청안함
          {/* onClick으로 yn여부를확인하기 보다
          data-value로 설정하면 편함*/}
        </Button>
        <Button
          name="isRf"
          weak={isRf === false}
          size="medium"
          data-value={false}
          onClick={handleButtonClick}
        >
          신청
        </Button>
      </Button.Group>
      <Spacing size={12} />
      <Button.Group title="후불하이패스가능">
        <Button
          name="isHipass"
          weak={isHipass === true}
          size="medium"
          data-value={true}
          onClick={handleButtonClick}
        >
          신청안함
        </Button>
        <Button
          name="isHipass"
          weak={isHipass === false}
          size="medium"
          data-value={false}
          onClick={handleButtonClick}
        >
          신청
        </Button>
      </Button.Group>

      <FixedBottomButton
        label="다음"
        onClick={() => {
          onNext(cardInfoValues);
        }}
      />
    </div>
  );
}
