import { logIn } from "../../requestsHandlers/auth";

const handleInputValue = ({ target }, setInputValue, setErrorMessate) => {
  setInputValue(target.value);
  setErrorMessate(null);
};

const handleLogin = async (e, payload, navigate, ...callbacks) => {
  e.preventDefault();
  const [setErrorMessage, setIsLoading] = callbacks;

  setIsLoading(true);
  const data = await logIn(payload);
  const { token, user = {} } = data;

  if (token && user && user._id) {
    localStorage.setItem("token", token);
    localStorage.setItem("userId", user._id);
    navigate(`/users`);
    setIsLoading(false);
  }

  setErrorMessage(data && data.message);
  setIsLoading(false);
};

export default {
  handleInputValue,
  handleLogin
};
