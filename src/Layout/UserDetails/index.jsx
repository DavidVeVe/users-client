import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Input from "../../Components/Input";
import Button from "../../Components/Button";
import helper from "../User/helper";
import constants from "../../common/constants";
import detailsHelper from "./helper";
import "./userdetails.scss";

const { handleInputChange, handleUpdateUser } = detailsHelper;

const {
  SIGNUP: { PICTURE, PHONE, ADDRESS, AGE, EYE_COLOR, NAME, COMPANY, BALANCE }
} = constants;

function UserDetails({}) {
    
    
    const [user, setUser] = useState({});
    
    useEffect(() => {
        const getUserData = async () => {
            const data = await helper.getUser(userId);
            setUser(data);
        };
        
        getUserData();
    }, []);
    
    console.log(user.name)
  const [first, setFirstName] = useState(user?.name?.first);
  const [last, setLastName] = useState(user?.name?.last);
  const [age, setAge] = useState(user.age);
  const [eyeColor, setEyeColor] = useState(user.eyeColor);
  const [picture, setPicture] = useState(user.picture);
  const [company, setCompany] = useState(user.company);
  const [phone, setPhone] = useState(user.phone);
  const [address, setAddress] = useState(user.address);
  const [balance, setBalance] = useState(user.balance);

  const { userId } = useParams();
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
    address
  };

  return (
    <form className="user-details">
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
        onClick={(e) =>
          handleUpdateUser(
            e,
            navigate,
            userId,
            updateDetailsPayload,
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
      />
    </form>
  );
}

export default UserDetails;
