import { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./user.scss";

function User() {
  const { userId } = useParams();

  useEffect(() => {
    const fetchUser = async () => {
      const response = fetch(
        `http://localhost:3000/api/v1/users/${userId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            api: "unfkktcy"
          }
        }
      );

      const userData = await response.json();
      return userData
    };

    fetchUser()
  }, []);

  return <h1>User</h1>;
}

export default User;
