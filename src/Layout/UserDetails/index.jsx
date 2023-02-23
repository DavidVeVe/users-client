import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import RenderIfValid from "../../common/RenderIfValid";
import Input from "../../Components/Input";
import Button from "../../Components/Button";
import Loader from "../../Components/Loader";
import helper from "../User/helper";
import constants from "../../common/constants";
import detailsHelper from "./helper";
import "./userdetails.scss";

const { handleInputChange, handleUpdateUser } = detailsHelper;

const {
  SIGNUP: { PICTURE, PHONE, ADDRESS, AGE, EYE_COLOR, NAME, COMPANY, BALANCE }
} = constants;

const EDIT = "Edit user details";

function UserDetails() {
  // This could be refactored with a reducer
  const [first, setFirstName] = useState("");
  const [last, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [eyeColor, setEyeColor] = useState("");
  const [picture, setPicture] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [balance, setBalance] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const userId = localStorage.getItem("userId");
  useEffect(() => {
    const getUserData = async () => {
      setIsLoading(true);
      const data = await helper.getUser(userId);

      setFirstName(data.name.first);
      setLastName(data.name.last);
      setAge(data.age);
      setEyeColor(data.eyeColor);
      setPicture(data.picture);
      setCompany(data.company);
      setPhone(data.phone);
      setAddress(data.address);
      setBalance(data.balance);
      setIsLoading(false);
    };

    getUserData();
  }, []);

  const navigate = useNavigate();

  const updateDetailsPayload = {
    name: {
      first,
      last
    },
    age,
    eyeColor,
    picture,
    company,
    phone,
    address,
    balance
  };

  const updateUser = (e) =>
    handleUpdateUser(e, navigate, userId, updateDetailsPayload);

  return (
    <>
      <RenderIfValid isValid={isLoading}>
        <Loader />
      </RenderIfValid>
      <RenderIfValid isValid={!isLoading}>
        <form className="user-details">
          <h3>{EDIT}</h3>
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
            btnValue="Save"
            onClick={updateUser}
            customClassName="edit-user"
          />
        </form>
      </RenderIfValid>
    </>
  );
}

export default UserDetails;
