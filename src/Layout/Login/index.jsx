import { useState } from "react";
import Input from "../../Components/Input";
import Button from "../../Components/Button";
import constants from "../../common/constants";
import requestHandlers from "./helper";
import "./login.scss";

const { handleEmailValue, handlePasswordValue, handleLogin } = requestHandlers;

const {
  LOGIN: { EMAIL, PASSWORD }
} = constants;

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <h1>This is login</h1>
      <form>
        <Input
          labelText={EMAIL}
          value={email}
          onChange={(e) => handleEmailValue(e, setEmail)}
        />
        <Input
          labelText={PASSWORD}
          value={password}
          onChange={(e) => handlePasswordValue(e, setPassword)}
        />
        <Button onClick={(e) => handleLogin(e, { email, password })} />
      </form>
    </>
  );
}

export default Login;
