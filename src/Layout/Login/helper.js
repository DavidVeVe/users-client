import { logIn } from "../../requestsHandlers/auth";

const handleEmailValue = ({ target }, setEmail) => {
  setEmail(target.value);
};

const handlePasswordValue = ({ target }, setPassword) => {
  setPassword(target.value);
};

const handleLogin = async (e, payload) => {
  e.preventDefault();
  const data = await logIn(payload);
  return data;
};

export default {
  handleEmailValue,
  handlePasswordValue,
  handleLogin
};
