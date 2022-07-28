import React from "react";
import { Link } from "react-router-dom";
import "../styles/ItemCard.css";

const ItemCard = ({ title, multimedia, id }) => {
  return (
    <Link className="item-card" to={`/details/${id}`}>
      <img className="thumbnail" src={multimedia ? multimedia[2].url : require("../assets/defaultThumbnail.png")} />
      <div className="card-info">
        <h3>{title}</h3>
      </div>
    </Link>
  )
}

export default ItemCard;