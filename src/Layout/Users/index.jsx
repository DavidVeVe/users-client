import { useEffect, useState } from "react";
import User from "../User";
import UserCard from "../UserCard";
import helper from "./helper";
import "./users.scss";

function Users() {
  const [usersdata, setUsersdata] = useState([]);
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    const getUsersData = async () => {
      const data = await helper.getUsers();
      setUsersdata(data);
    };

    getUsersData();
  }, []);

  const currentUserData = usersdata.filter((user) => user._id === userId)[0];

  const usersCardsData = usersdata.filter((user) => user._id !== userId);

  console.log(usersCardsData);

  return (
    <section className="users">
      <User userData={currentUserData} />
      <div className="users__cards">
        {usersCardsData.map((user) => (
          <UserCard userData={user} />
        ))}
      </div>
    </section>
  );
}

export default Users;
