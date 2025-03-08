import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function CardList() {
  return (
    <main className="card-list">
      <Card/>
      <Card/>
      <Card/>
      <Card/>

    </main>
  );
}
const title="Card Title";
function Card(){
  return (
    <div className="card">
      <img src="https://th.bing.com/th/id/OIP.qYjxUSvCp5Hy5iJxs4crOwAAAA?w=324&h=324&rs=1&pid=ImgDetMain" alt="cart-image"/>
      <h1>{title}</h1>
      <Description/>
    </div>
  )

}

function Description(){
return <p style={{marginTop:"10px"}}>Loremaloremlorem</p>
}

ReactDOM.createRoot(document.getElementById("root")).render(<CardList />);

//return single element
//div/section/article/Fragment/use
//use camelCase
//use className instead of class
//formatting
//use close
