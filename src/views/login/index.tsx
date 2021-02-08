import { observer } from "mobx-react-lite";
import GoogleLogin from "react-google-login";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "reactstrap";
import { Loading } from "../../components/loading";
import { useLoginMutation } from "../../generated/hooks";
import { Assets } from "../../helpers/assets";
import useLocalStorage from "../../hooks/useLocalStorage";
import { useStores } from "../../hooks/useStores";
import { RoleEnum } from "../../shared/enums";
import { Styles } from "./styles";

const { REACT_APP_CLIENT_ID }: any = process.env;

export const Login = observer(() => {
  const { sessionStore } = useStores();

  const location = useLocation();

  const navigate = useNavigate();

  const [session, setSession] = useLocalStorage("@session");

  const [doLogin, { loading }] = useLoginMutation({
    onError: (err) => {
      console.log("err :>> ", err);
    },
    onCompleted: ({ googleLogin }) => {
      Object.assign(sessionStore, googleLogin);
      sessionStore.setAsAuthenticated(true);
      setSession(googleLogin.token);
      goTo();
    },
  });

  const goTo = () => {
    const to = {
      [RoleEnum.MANAGEMENT]: "/management",
      [RoleEnum.CONTRIBUTOR]: "/contributor",
    };

    navigate(
      (location.state as any)?.from || { pathname: to[sessionStore.role] },
      { replace: true }
    );
  };

  const googleSuccess = (data: any) => {
    const { accessToken } = data;

    if (accessToken) doLogin({ variables: { access_token: accessToken } });
  };

  return (
    <Styles>
      <img className="wave" src={Assets("/images/wave.png")} alt="wave" />
      <div className="container-login">
        <div className="img">
          <img src={Assets("/images/bg.svg")} alt="bg" />
        </div>
        <div className="login">
          <h2 className="h2">PROTRACK</h2>
          <GoogleLogin
            clientId={REACT_APP_CLIENT_ID}
            render={(props) => (
              <Loading loading={session || loading}>
                <Button color="success" {...props} className="shadow">
                  Entrar como Atlante
                </Button>
              </Loading>
            )}
            isSignedIn={true}
            buttonText="Login"
            onSuccess={googleSuccess}
            cookiePolicy={"single_host_origin"}
          />
        </div>
      </div>
    </Styles>
  );
});
