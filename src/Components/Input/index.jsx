import "./input.scss";

function Input({ labelText }) {
  return (
    <>
      <label>{labelText}</label>
      <input type="text" />
    </>
  );
}

export default Input;
