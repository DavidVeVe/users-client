import "./button.scss";

function Button({ btnValue, icon, onClick, children, customClassName, isBlocked }) {
  const className = (btnValue && "has-background") || customClassName;
  return (
    <button className={className} onClick={onClick}>
      {icon || btnValue || children}
    </button>
  );
}

export default Button;
