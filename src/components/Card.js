import React from "react";

export default function Card(props) {
  return (
    <div className="card">
      <img className="card--img" src={props.imageUrl} />
      <div className="card--infosection">
        <div className="card--infosection--location">
          <img src={require("../images/location.png")} />
          <p>{props.location}</p>
          <a href={props.googleMapsUrl}>View on Google Maps</a>
        </div>
        <p className="card--infosection--name">{props.title}</p>
        <p className="card--infosection--date">
          {props.startDate} - {props.endDate}
        </p>
        <p className="card--infosection--description">{props.description}</p>
      </div>
    </div>
  );
}
