import React from "react";
export const Card = (props) => {
    const {name,study,sport,image} = props.user;
  return (
    <>
      <div className="card">
        <h4>{name}</h4>
        <small>{study}</small>
        <p>
          {sport}
        </p>
        <img src={image.src} alt={image.alt} />
      </div>
    </>
  );
};
