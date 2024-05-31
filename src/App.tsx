import Text from "@shared/Text";
import Button from "@shared/Button";
import Input from "@shared/Input";
import TextField from "@shared/TextField";
import Alert from "./components/shared/Alert";

function App() {
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
      <Alert
        open={true}
        title="알럿"
        onButtonClick={() => {}}
        description="dddd"
      />
    </div>
  );
}

export default App;
