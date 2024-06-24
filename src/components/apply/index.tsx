import { useState } from "react";

import Terms from "../components/apply/Terms";
import BasicInfo from "../components/apply/BasicInfo";
import CardInfo from "../components/apply/CardInfo";

import { ApplyValues } from "../models/apply";

export default function Apply({
  step,
  onSubmit,
}: {
  step: number;
  onSubmit: () => {};
}) {
  const handleTermsChange = (terms: ApplyValues["terms"]) => {};

  const handleBasicInfoChange = (
    infoValues: Pick<ApplyValues, "salary" | "payDate" | "creditScore">
  ) => {};

  const handleCardInfoChange = (
    cardInfoValues: Pick<ApplyValues, "isHipass" | "isMaster" | "isRf">
  ) => {};
  return (
    <div>
      {step === 0 ? <Terms onNext={handleTermsChange} /> : null}
      {step === 1 ? <BasicInfo onNext={handleBasicInfoChange} /> : null}
      {step === 2 ? <CardInfo onNext={handleCardInfoChange} /> : null}
    </div>
  );
}
