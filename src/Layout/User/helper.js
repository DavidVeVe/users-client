import requests from "../../requestsHandlers/user";

const { fetchSingleUser } = requests;

const getUser = async (userId) => {
  const data = await fetchSingleUser(userId);
  return data;
};

export default { getUser };
