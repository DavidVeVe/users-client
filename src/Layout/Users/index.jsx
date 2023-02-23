import { useEffect, useState } from "react";
import User from "../User";
import UserCard from "../UserCard";
import Loader from "../../Components/Loader";
import helper from "./helper";
import "./users.scss";
import RenderIfValid from "../../common/RenderIfValid";

const { getSelectedUserId, getCurrentUserData, getUsersCardsData } = helper;

function Users() {
  const userId = localStorage.getItem("userId");
  const [usersdata, setUsersdata] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getUsersData = async () => {
      setIsLoading(true);
      const data = await helper.getUsers();
      setIsLoading(false);
      setUsersdata(data);
    };

    getUsersData();
  }, []);

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
    </section>
  );
}

export default Users;
