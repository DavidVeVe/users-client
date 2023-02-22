import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Button from "../../Components/Button";
import helper from "./helper";
import "./user.scss";

const { getUser, editUser } = helper;

function User() {
  const { userId } = useParams();
  const [user, setUser] = useState({});
  const { balance, picture, name } = user;
  const [showBalance, setShowBalance] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const getUserData = async () => {
      const data = await getUser(userId);
      setUser(data);
    };

    getUserData();
  }, []);

  const toggleBalance = () => {
    setShowBalance(!showBalance);
  };

  const currentBalance = showBalance && <h5>{balance}</h5>;

  const userName = (
    <h5>
      {name?.first} {name?.last}
    </h5>
  );

  return (
    <section className="user-profile">
      <img className="user-profile__image" src={picture} />
      {userName}
      <div className="user-profile__btns">
        <Button btnValue="Balance" onClick={toggleBalance} />
        <Button btnValue="Edit" onClick={() => editUser(navigate, userId)} />
      </div>
      {currentBalance}
    </section>
  );
}

export default User;
