import { useEffect, useState } from "react";
import User from "../User";
import UserCard from "../UserCard";
import helper from "./helper";
import "./users.scss";

const { getSelectedUserId, getCurrentUserData, getUsersCardsData } = helper;

function Users() {
  const userId = localStorage.getItem("userId");
  const [usersdata, setUsersdata] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(null);

  useEffect(() => {
    const getUsersData = async () => {
      const data = await helper.getUsers();
      setUsersdata(data);
    };

    getUsersData();
  }, []);

  const cardsUsers = getUsersCardsData(
    selectedUserId,
    userId,
    usersdata
  ).map((user) => (
    <UserCard
      userData={user}
      onClick={(id) => getSelectedUserId(id, setSelectedUserId)}
      key={user._id}
    />
  ));

  const currentUserData = getCurrentUserData(selectedUserId, userId, usersdata);

  return (
    <section className="users">
      <User userData={currentUserData} />
      <div className="users__cards">{cardsUsers}</div>
    </section>
  );
}

export default Users;
