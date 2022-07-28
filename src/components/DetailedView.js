import React from "react";
import "../styles/DetailedView.css";
import { useParams } from "react-router-dom";

const DetailedView = ({ stories }) => {

  const { id } = useParams();
  const storyData = stories.find(story => story.id === id)
  const getDate = () => {
    return storyData.created_date.split("T")[0].split("-").join("/")
  }

  return (
    <section className="detailed-view">
      <h2 className="story-title">{storyData.title}</h2>
      <section>
        <div className="date-info-box">
          <p className="byline">{storyData.byline}</p>
          <p className="date">{getDate()}</p> 
        </div>
        <div className="story-info-box">
          {storyData.multimedia && <img className="img-large" src={storyData.multimedia[0].url} /> }
          <div className="abstract-box">
            <p className="abstract">{storyData.abstract}</p>
            <p className="nyt-link">Read more at <a href={`${storyData.short_url}`} target="_blank">The New York Times</a></p>
          </div>
        </div>
      </section>
    </section>
  )
}

export default DetailedView;