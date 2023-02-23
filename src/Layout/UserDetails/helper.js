import requests from "../../requestsHandlers/user";

const handleUpdateUser = async (e, navigate, userId, payload) => {
  e.preventDefault();
  const data = await requests.updateUser(userId, payload);
  navigate('/users');
  return data
};

const handleInputChange = ({ target }, setInputState) => {
  setInputState(target.value);
};

const cancelEdit = (navigateTo, userId) => {
  navigateTo('/users')
}

export default { handleUpdateUser, handleInputChange, cancelEdit };
