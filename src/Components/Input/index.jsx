import RenderIfValid from "../../common/RenderIfValid";
import "./input.scss";

function Input({ labelText }) {
  return (
    <>
      <RenderIfValid isValid={labelText}>
        <label>{labelText}</label>
      </RenderIfValid>
      <input type="text" />
    </>
  );
}

export default Input;
