import RenderIfValid from "../../common/RenderIfValid";
import "./input.scss";

function Input({ labelText, value, onChange }) {
  return (
    <div className="input__wrapper">
      <RenderIfValid isValid={labelText}>
        <label>{labelText}</label>
      </RenderIfValid>
      <input type="text" value={value} onChange={onChange} />
    </div>
  );
}

export default Input;
