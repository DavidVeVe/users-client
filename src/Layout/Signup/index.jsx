import Input from "../../Components/Input";
import Button from "../../Components/Button";
import constants from "../../common/constants";
import helper from "./helper";
import "./signup.scss";

const { signUpHandler } = helper;

const {
  SIGNUP: { PICTURE, PHONE, ADDRESS, AGE, EYE_COLOR, NAME, COMPANY }
} = constants;

function Signup() {
  return (
    <form>
      <Input labelText={NAME.FIRST} />
      <Input labelText={NAME.LAST} />
      <Input labelText={AGE} />
      <Input labelText={EYE_COLOR} />
      <Input labelText={PICTURE} />
      <Input labelText={COMPANY} />
      <Input labelText={PHONE} />
      <Input labelText={ADDRESS} />
      <Button onClick={(e) => signUpHandler(e)} />
    </form>
  );
}

export default Signup;
