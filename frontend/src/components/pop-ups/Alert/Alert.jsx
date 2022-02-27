import { ButtonModal } from "../../common/Button/Button";
import { AlertSc } from "./style";

export default function Alert({ msg, onClick }) {
  return (
    <AlertSc>
      <p>{msg}</p>
      <ButtonModal onClick={onClick}>Ok</ButtonModal>
    </AlertSc>
  );
}
