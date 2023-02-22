import { signUp } from "../../requestsHandlers/auth";

const handleEmailChange = ({ target }, setEmail) => {
  setEmail(target.value);
};
const handlePasswordChange = ({ target }, setPassword) => {
  setPassword(target.value);
};
const handleFirstNameChange = ({ target }, setFirstName) => {
  setFirstName(target.value);
};
const handleLastNameChange = ({ target }, setLastName) => {
  setLastName(target.value);
};
const handleAgeChange = ({ target }, setAge) => {
  setAge(target.value);
};
const handleEyeColorChange = ({ target }, setEyeColor) => {
  setEyeColor(target.value);
};
const handlePictureChange = ({ target }, setPicture) => {
  setPicture(target.value);
};
const handleCompanyChange = ({ target }, setCompany) => {
  setCompany(target.value);
};
const handlePhoneChange = ({ target }, setPhone) => {
  setPhone(target.value);
};
const handleAddressChange = ({ target }, setAddress) => {
  setAddress(target.value);
};

const signUpHandler = async (e, payload) => {
  e.preventDefault();
  const data = await signUp(payload)
  console.log(data);
};

export default {
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
};
