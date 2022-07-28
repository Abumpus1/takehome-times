import React from "react";
import { useParams } from "react-router-dom";

const DetailedView = ({ stories }) => {

  const { id } = useParams();
  const storyData = stories.find(story => story.id === id)

  return (
    <section className="detailed-view">
      <h2>{storyData.title}</h2>
    </section>
  )
}

export default DetailedView;