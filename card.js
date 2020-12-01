import React from "react";
import UserIcon from "./userIcon";

const Card = ({
  fillColor = "#BB86FC",
  name = "Name",
  species = "Species",
  setOpenedUser,
}) => {
  return (
    <div className="card" id="card" onClick={setOpenedUser}>
      <div className="card__info">
        <UserIcon fillColor={fillColor} />
        <h1 className="name">{name}</h1>
        <h2 className="spicies">{species}</h2>
      </div>
    </div>
  );
};

export default Card;
