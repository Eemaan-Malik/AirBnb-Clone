import React from "react";
import "./index.css";

export default function Card (props){

    let badgeText
    if(props.openSpots===0 ){
        badgeText = "SOLD OUT"
    }
    else if (props.openSpots === "Online"){
         badgeText = "ONLINE"
    }

return (

    <div className="card">
        {badgeText && <div className="card-badge">{badgeText}</div>}
        <div className="main">
        <img className= "card-image" src= {props.img} alt ={props.alt}/>
        <div className="card-stats">
            <img className= "card-star" src = {props.star} alt = "card star iamge"/>
            <span>{props.rating}</span>
            <span className="gray">({props.reviewCount}).</span>
            <span className="gray">{props.country}</span>

        </div>
        <p className="title">{props.title}</p>
        <p><span className="bold">From ${props.price}</span> / person</p>

    </div>
    </div>
)
}