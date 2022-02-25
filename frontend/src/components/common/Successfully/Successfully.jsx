import { SuccessfullySc } from "./style";
import { BsCheck2Circle } from "react-icons/bs";
import { VscError } from "react-icons/vsc";
import { ButtonModal } from "../Button/Button";

export default function Successfully({ content, check, onClick }) {
  return (
    <SuccessfullySc>
      {(check && <BsCheck2Circle />) || <VscError />}
      <span>{content}</span>
      <ButtonModal type="button" onClick={onClick}>
        Ok
      </ButtonModal>
    </SuccessfullySc>
  );
}
