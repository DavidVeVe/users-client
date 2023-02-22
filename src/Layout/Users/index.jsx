import { useEffect } from "react";
import "./users.scss";

function Users() {
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch("http://localhost:3000/api/v1/users", {
        headers: {
          api: "unfkktcy"
        }
      });

      const data = await response.json();
      console.log(data);
    };

    fetchUsers();
  }, []);

  return <h1>Users</h1>;
}

export default Users;
