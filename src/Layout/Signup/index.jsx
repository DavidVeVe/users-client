import { useState } from "react";
import Input from "../../Components/Input";
import Button from "../../Components/Button";
import constants from "../../common/constants";
import helper from "./helper";
import "./signup.scss";

const {
  signUpHandler,
  handleFirstNameChange,
  handleLastNameChange,
  handleAgeChange,
  handleEyeColorChange,
  handlePictureChange,
  handleCompanyChange,
  handlePhoneChange,
  handleAddressChange,
  handleEmailChange,
  handlePasswordChange
} = helper;

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
    PASSWORD
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
    <form>
      <Input
        labelText={EMAIL}
        value={email}
        onChange={(e) => handleEmailChange(e, setEmail)}
      />
      <Input
        labelText={PASSWORD}
        value={password}
        onChange={(e) => handlePasswordChange(e, setPassword)}
      />
      <Input
        labelText={NAME.FIRST}
        value={first}
        onChange={(e) => handleFirstNameChange(e, setFirstName)}
      />
      <Input
        labelText={NAME.LAST}
        value={last}
        onChange={(e) => handleLastNameChange(e, setLastName)}
      />
      <Input
        labelText={AGE}
        value={age}
        onChange={(e) => handleAgeChange(e, setAge)}
      />
      <Input
        labelText={EYE_COLOR}
        value={eyeColor}
        onChange={(e) => handleEyeColorChange(e, setEyeColor)}
      />
      <Input
        labelText={PICTURE}
        value={picture}
        onChange={(e) => handlePictureChange(e, setPicture)}
      />
      <Input
        labelText={COMPANY}
        value={company}
        onChange={(e) => handleCompanyChange(e, setCompany)}
      />
      <Input
        labelText={PHONE}
        value={phone}
        onChange={(e) => handlePhoneChange(e, setPhone)}
      />
      <Input
        labelText={ADDRESS}
        value={address}
        onChange={(e) => handleAddressChange(e, setAddress)}
      />
      <Button onClick={(e) => signUpHandler(e, signUpPayload)} />
    </form>
  );
}

export default Signup;
