import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../Components/Button";
import RenderIfValid from "../../common/RenderIfValid";
import helper from "./helper";
import "./user.scss";

const { editUser } = helper;

function User({ userData = {} }) {
  const { balance = "", name = {}, picture = "", _id = "", isLogedIn } = userData;
  const { first = "", last = "" } = name;
  const userId = localStorage.getItem('userId')

  const [showBalance, setShowBalance] = useState(false);
  const navigate = useNavigate();

  const toggleBalance = () => {
    setShowBalance(!showBalance);
  };

  return (
    <section className="user-profile">
      <img className="user-profile__image" src={picture} />
      <RenderIfValid isValid={first && last}>
        <h5 className="user-profile__name">
          {first} {last}
        </h5>
      </RenderIfValid>
      <div className="user-profile__btns">
        <Button btnValue="Balance" onClick={toggleBalance} disabled={_id !== userId} />
        <Button btnValue="Edit" onClick={() => editUser(navigate, userId)} />
      </div>
      <RenderIfValid isValid={showBalance && balance && _id === userId}>
        <h5 className="user-profile__balance">{balance}</h5>
      </RenderIfValid>
    </section>
  );
}

export default User;
