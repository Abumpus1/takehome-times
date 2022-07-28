import React, { useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import "../styles/Dashboard.css";
import Search from "./Search";

const Dashboard = ({ stories }) => {

  const [filteredItems, setFilteredItems] = useState(stories);

  const getInput = (input) => {
    setFilteredItems(stories.filter(story => story.title.toUpperCase().includes(input.toUpperCase())));
  }

  const storyCards = () => {
    return filteredItems.map(story => {
      return (
        <ItemCard
          key={story.id}
          id={story.id}
          title={story.title}
          multimedia={story.multimedia}
        />
      )
    })
  }

  return (
    <>
      <Search getInput={getInput} />
      <section className="dashboard">
        {storyCards()}
      </section>
    </>
  )
}

export default Dashboard;