const TOKEN = localStorage.getItem("token");

const getFetchConfig = (userId, method) => {
  return {
    url: `http://localhost:3000/api/v1/users/${userId}`,
    options: {
      method: method,
      headers: {
        "Content-Type": "application/json",
        api: "unfkktcy",
        Authorization: `Bearer ${TOKEN}`
      }
    }
  };
};

const fetchSingleUser = async (userId) => {
  const { url, options } = getFetchConfig(userId, "GET");

  const response = await fetch(url, options);
  const userData = await response.json();
  return userData;
};

const updateUser = async (userId, payload) => {
  const { url, options } = getFetchConfig(userId, "PATCH");

  const response = await fetch(url, {
    body: JSON.stringify(payload),
    ...options
  });

  const data = await response.json();
  return data;
};

export default { fetchSingleUser, updateUser };
