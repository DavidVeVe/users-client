import "./button.scss";

function Button({ btnValue, icon, onClick }) {
  return <button onClick={onClick}>{icon || btnValue}</button>;
}

export default Button;
