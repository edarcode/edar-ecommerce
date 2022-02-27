import GoogleLogin from "react-google-login";

export default function GoogleLoginn() {
  const onSuccess = (res) => {
    console.log(res.profileObj);
  };
  const onFailure = (res) => {
    console.log(res);
  };
  return (
    <GoogleLogin
      clientId="76380301552-qsnkk5s1l91jufetkl30nnt9uj9p9es8.apps.googleusercontent.com"
      buttonText={"Login"}
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy={"single_host_origin"}
    />
  );
}
