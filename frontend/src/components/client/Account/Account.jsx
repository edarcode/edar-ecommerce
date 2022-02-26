import { useDispatch } from "react-redux";
import { logout } from "../../../redux/reducers/storage/actions";
import { Button } from "../../common/Button/Button";
import { AccountSc } from "./style";

export default function Account() {
  const dispatch = useDispatch();

  const handleOnClickLogout = (e) => {
    dispatch(logout());
  };

  return (
    <AccountSc>
      <Button onClick={handleOnClickLogout}>logout</Button>
    </AccountSc>
  );
}
