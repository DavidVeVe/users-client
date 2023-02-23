import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../Components/Input";
import Button from "../../Components/Button";
import constants from "../../common/constants";
import requestHandlers from "./helper";
import logo from '../../assets/logo.png'
import "./login.scss";

const { handleEmailValue, handlePasswordValue, handleLogin } = requestHandlers;

const {
  LOGIN: { EMAIL, PASSWORD }
} = constants;

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  return (
    <section className="login">
      <img className="logo" src={logo} />
      <form className="login__form">
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
        <Button onClick={(e) => handleLogin(e, { email, password }, navigate)} btnValue='LOGIN' />
      </form>
    </section>
  );
}

export default Login;
