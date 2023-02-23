import requests from "../../requestsHandlers/user";
const handleUpdateUser = async (e, navigate, userId, payload, ...callbacks) => {
  e.preventDefault();
  const data = await requests.updateUser(userId, payload);
  console.log(data);
  navigate(`/users/${userId}`);
};

const handleInputChange = ({ target }, setInputState) => {
  setInputState(target.value);
};

export default { handleUpdateUser, handleInputChange };
