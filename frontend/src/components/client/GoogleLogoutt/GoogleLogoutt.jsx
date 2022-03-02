import { useGoogleLogout } from "react-google-login";
import { Button } from "../../common/Button/Button";
const { REACT_APP_GOOGLE_ID } = process.env;

export default function GoogleLogoutt() {
  const onFailure = (res) => {
    console.log("onFailure", res);
  };
  const onLogoutSuccess = () => {
    console.log("onLogoutSuccess");
  };
  const { signOut } = useGoogleLogout({
    clientId: REACT_APP_GOOGLE_ID,
    onLogoutSuccess,
    onFailure,
  });
  return <Button onClick={signOut}>Logout</Button>;
}
