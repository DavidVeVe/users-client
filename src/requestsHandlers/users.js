const fetchUsers = async (token) => {
  const response = await fetch("http://localhost:3000/api/v1/users", {
    headers: {
      api: "unfkktcy",
      Authorization: `Bearer ${token}`
    }
  });

  const data = await response.json();
  return data
};

export default { fetchUsers };
