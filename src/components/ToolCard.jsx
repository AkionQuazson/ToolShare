import React from "react";
import '../css/ToolCard.css'

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
      <p className="location">{data.city}, {data.state}</p>
      {/* price */}
      <p className="price">${data.price} {data.interval}</p>
      {/* rating */}
      <p className="rating">{data.rating || 3.5}</p>
    </div>
  );
};

export default ToolCard;