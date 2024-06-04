import Text from "@shared/Text";
import Button from "@shared/Button";
import Input from "@shared/Input";
import TextField from "@shared/TextField";
import Alert from "./components/shared/Alert";
import { useAlertContext } from "./contexts/AlertContext";

function App() {
  const { open } = useAlertContext();
  return (
    <div>
      <Text typography="t1" display="block">
        t1
      </Text>
      <Text typography="t3" display="block">
        t3
      </Text>
      <Button>클릭</Button>
      <Button>클릭</Button>
      <div>
        <Input></Input>
      </div>
      <TextField label="아이디" hasError={true} />
      {/* <Alert
        open={true}
        title="알럿"
        onButtonClick={() => {}}
        description="dddd"
      /> */}
      <Button
        onClick={() => {
          open({
            title: "카드신청완료",
            description: "내역페이지에서 확인해 주세요.",
            onButtonClick: () => {},
          });
        }}
      ></Button>
    </div>
  );
}

export default App;
