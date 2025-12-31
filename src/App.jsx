import { useState } from "react";

const App = () => {

  const [input, setInput] = useState("");

  const handleInput = (value) => {
    setInput((prev) => prev + value);
  }

  const handleClear = () => { setInput(""); }

  const handleDelete = () => {
    setInput((prev)=>prev.slice(0, -1));
  }

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput("Error");
    }
  };


  return (
    <div className="Calculator-container">
      <div className="Calculator"><div className="display">{input || "0"}</div>
      <div className="buttons">
        <button className="btn control" onClick={handleClear}>C</button>
        <button className="btn control" onClick={handleDelete}>DEL</button>
        <button className="btn operator" onClick={() =>handleInput("%")}>%</button>
        <button className="btn operator"onClick={() =>handleInput("/")}>/</button>

        <button className="btn" onClick={() =>handleInput("7")}>7</button>
        <button className="btn" onClick={() =>handleInput("8")}>8</button>
        <button className="btn" onClick={() =>handleInput("9")}>9</button>
        <button className="btn operator" onClick={() =>handleInput("*")}>x</button>

        <button className="btn" onClick={() =>handleInput("4")}>4</button>
        <button className="btn" onClick={() =>handleInput("5")}>5</button>
        <button className="btn" onClick={() =>handleInput("6")}>6</button>
        <button className="btn operator" onClick={() =>handleInput("-")}>-</button>

        <button className="btn" onClick={() =>handleInput("1")}>1</button>
        <button className="btn" onClick={() =>handleInput("2")}>2</button>
        <button className="btn" onClick={() =>handleInput("3")}>3</button>
        <button className="btn operator" onClick={() =>handleInput("+")}>+</button>

        <button className="btn zero" onClick={() =>handleInput("0")}>0</button>
        <button className="btn" onClick={() =>handleInput(".")}>.</button>
        <button className="btn equal" onClick={handleCalculate}>=</button>
      </div>
      </div>
    </div>
  );
}

export default App;