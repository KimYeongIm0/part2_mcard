import Agreement from "../shared/Agreement";

export default function Terms() {
  return (
    <div>
      <Agreement>
        <Agreement.Title checked={true} onChange={(e, checked) => {}}>
          약관에 모두 동의
        </Agreement.Title>
        <Agreement.Description checked={false} onChange={(e, checked) => {}}>
          약관1
        </Agreement.Description>
        <Agreement.Description checked={true} onChange={(e, checked) => {}}>
          약관2
        </Agreement.Description>
      </Agreement>
    </div>
  );
}
