import "./button.scss";

function Button({ btnValue, icon, onClick, children, customClassName, disabled }) {
  const className = (btnValue && "has-background") || customClassName;
  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      {icon || btnValue || children}
    </button>
  );
}

export default Button;
