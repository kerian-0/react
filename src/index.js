import React from "react";
import ReactDOM from "react-dom/client";

function Greeting() {
  return (
    <>
      <h1>Hey How are you? I hope you are </h1>
      <input type="text" placeholder="Enter your text"/>
      <button className="btn">Click me</button>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Greeting />);

//return single element
//div/section/article/Fragment/use
//use camelCase
//use className instead of class
//formatting
//use close
