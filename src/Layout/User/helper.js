import requests from "../../requestsHandlers/user";

const { fetchSingleUser } = requests;

const getUser = async (userId) => {
  const data = await fetchSingleUser(userId);
  return data.data;
};

const editUser = (navigate, userId) => {
  navigate(`/users/${userId}/updateDetails`)
}

export default { getUser, editUser };
