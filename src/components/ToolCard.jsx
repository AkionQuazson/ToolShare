import React from "react";
import '../css/ToolCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ToolCard = (props) => {
    const {data} = props;

  return (
    <div className="card">
      {/* image */}
      <img src={data.image} alt="" />
      {/* availability date */}
      <div className="availabilityTag"><p>{data.availability}</p>
        <p>Available</p></div>
      {/* title */}
      <p className="title">{data.name}</p>
      {/* location */}
      <div className="location"><p className="city">{data.city}</p>, {data.state}</div>
      {/* price */}
      <p className="price">${data.price} {data.interval}</p>
      {/* rating */}
      <p className="rating"><FontAwesomeIcon icon="fa-solid fa-star" size="sm" style={{color: "#FFD43B",}} />{data.rating || 3.5}</p>
    </div>
  );
};

export default ToolCard;