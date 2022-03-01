import { GoogleLogout } from "react-google-login";
const { REACT_APP_GOOGLE_ID } = process.env;

export default function GoogleLogoutt() {
  const onLogoutSuccess = (res) => {
    console.log(res);
  };
  return (
    <GoogleLogout
      clientId={REACT_APP_GOOGLE_ID}
      onLogoutSuccess={onLogoutSuccess}
      onFailure={onLogoutSuccess}
      render={(renderProps) => (
        <button onClick={renderProps.onClick} disabled={renderProps.disabled}>
          Logout
        </button>
      )}
    ></GoogleLogout>
  );
}
