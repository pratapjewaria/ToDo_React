import { useState } from "react";
import "./Top.css";

const Top = (props) => {
  const [value, setvalue] = useState("");
  const onClick = () => {
    props.callbac(value);
    setvalue("");
  };
  const onkeypress = (e) => {
    if (e.key === "Enter") {
      onClick();
    }
  };
  return (
    <div className="inputForm">
      <input
        type="text"
        placeholder="new item"
        className="inputText"
        value={value}
        onChange={(e) => setvalue(e.target.value)}
        onKeyPress={onkeypress}
      />
      <button className="addbutton" onClick={onClick}>
        Add
      </button>
    </div>
  );
};
export default Top;
