import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../../Components/Button";
import helper from "./helper";
import "./user.scss";

const { getUser } = helper;

function User() {
  const { userId } = useParams();
  const [user, setUser] = useState({});
  const [showBalance, setShowBalance] = useState(false)

  useEffect(() => {
    const getUserData = async () => {
      const data = await getUser(userId);
      setUser(data);
    };

    getUserData();
  }, []);

  const toggleBalance = () => {
    console.log(showBalance);
    setShowBalance(!showBalance)
  }

  console.log(user)

  const balance = showBalance && <h5>{user.balance}</h5>

  return (
    <section className="user-profile">
      <img className="user-profile__image" src={user.picture} />
      <div className="user-profile__btns">
        <Button btnValue="Balance" onClick={toggleBalance} />
        <Button btnValue="Edit" />
      </div>
      {balance}
    </section>
  );
}

export default User;
