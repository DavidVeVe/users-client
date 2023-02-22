import { logIn } from "../../requestsHandlers/auth";

const handleEmailValue = ({ target }, setEmail) => {
  setEmail(target.value);
};

const handlePasswordValue = ({ target }, setPassword) => {
  setPassword(target.value);
};

const handleLogin = async (e, payload, navigate) => {
  e.preventDefault();
  const data = await logIn(payload);

  if (data && data.token) {
    localStorage.setItem("token", data.token);
    navigate(`/users/${data.user._id}`);
  }
};

export default {
  handleEmailValue,
  handlePasswordValue,
  handleLogin
};
