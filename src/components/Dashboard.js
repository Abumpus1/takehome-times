import React from "react";
import ItemCard from "./ItemCard";
import "../styles/Dashboard.css";

const Dashboard = ({ stories }) => {

  const storyCards = () => {
    return stories.map((story, index) => {
      return (
        <ItemCard
          key={`${new Date().getTime()}${index}`}
          title={story.title}
          multimedia={story.multimedia}
        />
      )
    })
  }

  return (
    <section className="dashboard">
      {storyCards()}
    </section>
  )
}

export default Dashboard;