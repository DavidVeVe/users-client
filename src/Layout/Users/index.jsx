import { useEffect, useState } from "react";
import User from "../User";
import helper from "./helper";
import "./users.scss";

function Users() {
  const [usersdata, setUsersdata] = useState([]);
  useEffect(() => {
    const getUsersData = async () => {
      const data = await helper.getUsers();
      console.log(data);
      setUsersdata(data);
    };

    getUsersData();
  }, []);

  const currentUserData = usersdata.filter((user) => {
    const userId = localStorage.getItem("userId");
    return user._id === userId;
  })[0];

  console.log(currentUserData);

  return (
    <section className="users">
      <User userData={currentUserData} />
    </section>
  );
}

export default Users;
