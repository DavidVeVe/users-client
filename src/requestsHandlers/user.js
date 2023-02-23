const fetchSingleUser = async (userId) => {
  const response = await fetch(`http://localhost:3000/api/v1/users/${userId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      api: "unfkktcy"
    }
  });

  const userData = await response.json();
  return userData;
};

const updateUser = async (userId, payload) => {
  const response = await fetch(`http://localhost:3000/api/v1/users/${userId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      api: "unfkktcy"
    },
    body: JSON.stringify(payload)
  });
  const data = await response.json();
  console.log(data);
};

export default { fetchSingleUser, updateUser };
