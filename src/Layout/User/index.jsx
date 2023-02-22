import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import helper from "./helper";
import "./user.scss";

const { getUser } = helper;

function User() {
  const { userId } = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    const getUserData = async () => {
      const data = await getUser(userId);
      setUser(data);
    };
    
    getUserData();
  }, []);

  console.log(user)

  return <h1>User</h1>;
}

export default User;
