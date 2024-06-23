import { useState } from "react";

import Terms from "../components/apply/Terms";
import BasicInfo from "../components/apply/BasicInfo";
import CardInfo from "../components/apply/CardInfo";

import { ApplyValues } from "../models/apply";

export default function Apply() {
  const [step, setStep] = useState(1);

  const handleTermsChange = (terms: ApplyValues["terms"]) => {};

  const handleBasicInfoChange = (
    infoValues: Pick<ApplyValues, "salary" | "payDate" | "creditScore">
  ) => {};
  return (
    <div>
      {step === 0 ? <Terms onNext={handleTermsChange} /> : null}
      {step === 1 ? <BasicInfo onNext={handleBasicInfoChange} /> : null}
      {step === 2 ? <CardInfo /> : null}
    </div>
  );
}
