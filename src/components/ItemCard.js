import React from "react";
import "../styles/ItemCard.css";

const ItemCard = ({ title }) => {
  return (
    <article className="item-card">
      <div className="thumbnail">
        <p>IMAGE IMAGE IMAGE IMAGE</p>
      </div>
      <div className="card-info">
        <h3>{title}</h3>
        <p>2022-07-27</p>
      </div>
    </article>
  )
}

export default ItemCard;