import React from "react";
import "../styles/ItemCard.css";

const ItemCard = () => {
  return (
    <article className="item-card">
      <div className="thumbnail">
        <p>IMAGE IMAGE IMAGE IMAGE</p>
      </div>
      <div className="card-info">
        <h3>Title explaining this article</h3>
        <p>2022-07-27</p>
      </div>
    </article>
  )
}

export default ItemCard;