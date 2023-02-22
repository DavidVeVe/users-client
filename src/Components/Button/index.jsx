import './button.scss'

function Button({ btnValue, icon }) {
  return <button>{icon || btnValue}</button>;
}

export default Button;
