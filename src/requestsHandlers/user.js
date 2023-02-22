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

export default { fetchSingleUser };
