import React, { useState } from "react";
import ReactDOM from "react-dom";

function Button(props) {
  const handleClick = () => props.onClickFunction(props.increment);
  return <button onClick={handleClick}>+{props.increment}</button>;
}

function Display(props) {
  return <div>{props.message}</div>;
}

function App() {
  const [counter, setCounter] = useState(0);
  const IncrementCounter = (incrementValue) =>
    setCounter(counter + incrementValue);
  return (
    <div>
      <Button onClickFunction={IncrementCounter} increment={5} />
      <Button onClickFunction={IncrementCounter} increment={10} />
      <Button onClickFunction={IncrementCounter} increment={15} />
      <Button onClickFunction={IncrementCounter} increment={20} />
      <Display message={counter} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("mountNode"));
