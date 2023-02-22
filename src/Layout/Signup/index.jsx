import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../Components/Input";
import Button from "../../Components/Button";
import constants from "../../common/constants";
import helper from "./helper";
import "./signup.scss";

const { signUpHandler, handleInputChange } = helper;

const {
  SIGNUP: {
    PICTURE,
    PHONE,
    ADDRESS,
    AGE,
    EYE_COLOR,
    NAME,
    COMPANY,
    EMAIL,
    PASSWORD,
    BALANCE
  }
} = constants;

function Signup() {
  //This would have been handled with a reducer having more time available and avoid all the use state and repetitive functions
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [first, setFirstName] = useState("");
  const [last, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [eyeColor, setEyeColor] = useState("");
  const [picture, setPicture] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [balance, setBalance] = useState("");
  const navigate = useNavigate();

  const signUpPayload = {
    name: {
      first,
      last
    },
    email,
    password,
    age,
    eyeColor,
    picture,
    company,
    phone,
    address
  };

  return (
    <form className="sigup-form">
      <Input
        labelText={EMAIL}
        value={email}
        onChange={(e) => handleInputChange(e, setEmail)}
      />
      <Input
        labelText={PASSWORD}
        value={password}
        onChange={(e) => handleInputChange(e, setPassword)}
      />
      <Input
        labelText={NAME.FIRST}
        value={first}
        onChange={(e) => handleInputChange(e, setFirstName)}
      />
      <Input
        labelText={NAME.LAST}
        value={last}
        onChange={(e) => handleInputChange(e, setLastName)}
      />
      <Input
        labelText={AGE}
        value={age}
        onChange={(e) => handleInputChange(e, setAge)}
      />
      <Input
        labelText={EYE_COLOR}
        value={eyeColor}
        onChange={(e) => handleInputChange(e, setEyeColor)}
      />
      <Input
        labelText={PICTURE}
        value={picture}
        onChange={(e) => handleInputChange(e, setPicture)}
      />
      <Input
        labelText={COMPANY}
        value={company}
        onChange={(e) => handleInputChange(e, setCompany)}
      />
      <Input
        labelText={PHONE}
        value={phone}
        onChange={(e) => handleInputChange(e, setPhone)}
      />
      <Input
        labelText={ADDRESS}
        value={address}
        onChange={(e) => handleInputChange(e, setAddress)}
      />
      <Input
        labelText={BALANCE}
        value={balance}
        onChange={(e) => handleInputChange(e, setBalance)}
      />
      <Button
        onClick={(e) =>
          signUpHandler(
            e,
            signUpPayload,
            navigate,
            setEmail,
            setPassword,
            setFirstName,
            setLastName,
            setAge,
            setEyeColor,
            setPicture,
            setCompany,
            setPhone,
            setAddress,
            setBalance
          )
        }
        btnValue="Sign Up"
      />
    </form>
  );
}

export default Signup;
