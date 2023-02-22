import { signUp } from "../../requestsHandlers/auth";

const handleInputChange = ({ target }, setInputState) => {
  setInputState(target.value);
};

const signUpHandler = async (e, payload, navigate, ...callbacks) => {
  e.preventDefault();
  const data = await signUp(payload);
  const { token } = data;
  if (token) {
    callbacks.forEach((callback) => {
      callback("");
    });
    navigate('/users')
  }
  console.log(data);
  return data;
};

export default {
  signUpHandler,
  handleInputChange
};
