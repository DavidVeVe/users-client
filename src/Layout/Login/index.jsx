import Input from "../../Components/Input";
import Button from "../../Components/Button";
import constants from "../../common/constants";
import "./login.scss";

const {
  LOGIN: { EMAIL, PASSWORD }
} = constants;

function Login() {
  return (
    <>
      <h1>This is login</h1>
      <Input labelText={EMAIL} />
      <Input labelText={PASSWORD} />
      <Button />
    </>
  );
}

export default Login;
