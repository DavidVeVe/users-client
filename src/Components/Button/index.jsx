import "./button.scss";

function Button({ btnValue, icon, onClick, children, customClassName }) {
  const className = (btnValue && "has-background") || customClassName;
  return (
    <button className={className} onClick={onClick}>
      {icon || btnValue || children}
    </button>
  );
}

export default Button;
