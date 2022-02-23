import InputText from "../../components/common/InputText/InputText";
import { LoginSc } from "./style";

export default function Login() {
  return (
    <LoginSc>
      <form>
        <InputText placeholder={"gmail"} />
      </form>
    </LoginSc>
  );
}
