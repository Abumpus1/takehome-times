import React from "react";
import "../styles/ItemCard.css";

const ItemCard = ({ title, multimedia }) => {
  return (
    <article className="item-card">
      <img className="thumbnail" src={multimedia ? multimedia[2].url : require("../assets/defaultThumbnail.png")} />
      <div className="card-info">
        <h3>{title}</h3>
      </div>
    </article>
  )
}

export default ItemCard;