import "./styles.css";
import Top from "./Top";
import ListItems from "./ListItems";
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState([]);
  let callbac = (value) => {
    setCount((count) => [...count, value]);
  };

  return (
    <div className="App">
      <div>Todo World !</div>
      <Top callbac={callbac} />
      {count.map((listName, index) => (
        <ListItems listName={listName} key={index} />
      ))}
    </div>
  );
}
