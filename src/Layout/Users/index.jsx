import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import User from "../User";
import UserCard from "../UserCard";
import Loader from "../../Components/Loader";
import Button from "../../Components/Button";
import helper from "./helper";
import common from "../../common/logout";
import "./users.scss";
import RenderIfValid from "../../common/RenderIfValid";

const { getSelectedUserId, getCurrentUserData, getUsersCardsData } = helper;

function Users() {
  const userId = localStorage.getItem("userId");
  const [usersdata, setUsersdata] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const TOKEN = localStorage.getItem('token')

  useEffect(() => {
    
    if(!TOKEN) {
      navigate('/login')
    }
    
    const getUsersData = async () => {
      setIsLoading(true);
      const data = await helper.getUsers();
      setIsLoading(false);
      setUsersdata(data);
    };

    getUsersData();
  }, [localStorage]);

  const CardsUsers = getUsersCardsData(selectedUserId, userId, usersdata).map(
    (user) => (
      <UserCard
        userData={user}
        onClick={(id) => getSelectedUserId(id, setSelectedUserId)}
        key={user._id}
      />
    )
  );

  const currentUserData = getCurrentUserData(selectedUserId, userId, usersdata);

  return (
    <section className="users">
      <RenderIfValid isValid={isLoading}>
        <Loader />
      </RenderIfValid>
      <RenderIfValid isValid={!isLoading}>
        <User userData={currentUserData} />
        <div className="users__cards">{CardsUsers}</div>
      </RenderIfValid>
      <Button onClick={() => common.logout(navigate)} customClassName="log-out">Log out</Button>
    </section>
  );
}

export default Users;
