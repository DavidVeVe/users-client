import { logIn } from "../../requestsHandlers/auth";

const handleInputValue = ({ target }, setInputValue, setErrorMessate) => {
  setInputValue(target.value);
  setErrorMessate(null);
};

const handleLogin = async (e, payload, navigate, setErrorMessage) => {
  e.preventDefault();
  const data = await logIn(payload);
  const { token, user = {} } = data;

  if (token && user && user._id) {
    localStorage.setItem("token", token);
    localStorage.setItem("userId", user._id);
    navigate(`/users`);
  }

  setErrorMessage(data && data.message);
};

export default {
  handleInputValue,
  handleLogin
};
