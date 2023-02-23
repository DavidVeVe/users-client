import requests from "../../requestsHandlers/users";

const getUsers = async () => {
  const token = localStorage.getItem("token");
  const data = await requests.fetchUsers(token);
  return data;
};

const getSelectedUserId = (id, callback) => callback(id);

const getCurrentUserData = (clickedUserId, logeduserId, data) =>
  [...data.filter((user) => user._id === (clickedUserId || logeduserId))][0];

const getUsersCardsData = (clickedUserId, logeduserId, data) => [
  ...data.filter((user) => user._id !== (clickedUserId || logeduserId))
];

export default {
  getUsers,
  getSelectedUserId,
  getCurrentUserData,
  getUsersCardsData
};
