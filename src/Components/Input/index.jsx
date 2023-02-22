import RenderIfValid from "../../common/RenderIfValid";
import "./input.scss";

function Input({ labelText, value, onChange }) {
  return (
    <>
      <RenderIfValid isValid={labelText}>
        <label>{labelText}</label>
      </RenderIfValid>
      <input type="text" value={value} onChange={onChange} />
    </>
  );
}

export default Input;
