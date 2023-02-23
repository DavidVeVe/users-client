import requests from "../../requestsHandlers/user";

const handleUpdateUser = async (e, navigate, userId, payload, getMessage) => {
  e.preventDefault();
  const data = await requests.updateUser(userId, payload);
  navigate(`/users`);
  return data
};

const handleInputChange = ({ target }, setInputState) => {
  setInputState(target.value);
};

export default { handleUpdateUser, handleInputChange };
