import { logIn } from "../../requestsHandlers/auth";

const handleInputValue = ({ target }, setInputValue, setErrorMessate) => {
  setInputValue(target.value);
  setErrorMessate(null)
};

const handleLogin = async (e, payload, navigate, setErrorMessage) => {
  e.preventDefault();
  const data = await logIn(payload);

  if (data && data.token) {
    localStorage.setItem("token", data.token);
    navigate(`/users/${data.user._id}`);
  }

  setErrorMessage(data && data.message)
};

export default {
  handleInputValue,
  handleLogin
};
