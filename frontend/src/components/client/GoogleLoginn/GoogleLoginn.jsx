import { GoogleLogin } from "react-google-login";
import email from "../../../assets/gmail.svg";
const { REACT_APP_GOOGLE_ID } = process.env;

export default function GoogleLoginn() {
  const onSuccess = (res) => {
    console.log(res.profileObj);
    console.log(res.tokenId);
  };
  const onFailure = (res) => {
    console.log(res);
  };
  return (
    <GoogleLogin
      clientId={REACT_APP_GOOGLE_ID}
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy={"single_host_origin"}
      render={(renderProps) => (
        <button
          onClick={renderProps.onClick}
          disabled={renderProps.disabled}
          style={{
            padding: "0",
            border: "none",
            width: "50px",
            height: "50px",
            background: "transparent",
          }}
        >
          <img src={email} alt="login with gmail" />
        </button>
      )}
    />
  );
}
