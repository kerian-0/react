import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const cardOne={
  image:"https://th.bing.com/th/id/OIP.qYjxUSvCp5Hy5iJxs4crOwAAAA?w=324&h=324&rs=1&pid=ImgDetMain",
title:"card One title",
description:"card one description"
}
const cardTwo={
  image:"https://th.bing.com/th/id/OIP.qYjxUSvCp5Hy5iJxs4crOwAAAA?w=324&h=324&rs=1&pid=ImgDetMain",
title:"card Two title",
description:"card Two description"
}

function CardList() {
  return (
    <main className="card-list">
      <Card image={cardOne.image} title={cardOne.title} description={cardOne.description}/>
      <Card image={cardTwo.image} title={cardTwo.title} description={cardTwo.description}/>
      

    </main>
  );
}
function Card(props){
  console.log(props);
  return (
    <div className="card">
      <img src={props.image} alt="cart-image"/>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  )

}

function Description(){
return <p style={{marginTop:"10px"}}>Loremaloremlorem</p>
}

ReactDOM.createRoot(document.getElementById("root")).render(<CardList />);

// return single element
// div/section/article/Fragment/use
// use camelCase
// use className instead of class
// formatting
// use close
