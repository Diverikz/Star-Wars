import React, { useState } from "react";
import SearchIcon from "./searchIcon";
import Card from "./card";
import UserModal from "./userModal";

const cards = [
  { fillColor: "#BB86FC", name: "Name", species: "Species" },
  { fillColor: "#BB86FC", name: "Name", species: "Species" },
  { fillColor: "#01A39D", name: "Name", species: "Species" },
  { fillColor: "#4B01D1", name: "Name", species: "Species" },
  { fillColor: "#BB86FC", name: "Name", species: "Species" },
  { fillColor: "#01A39D", name: "Name", species: "Species" },
  { fillColor: "#4B01D1", name: "Name", species: "Species" },
  { fillColor: "#BB86FC", name: "Name", species: "Species" },
  { fillColor: "#01A39D", name: "Name", species: "Species" },
  { fillColor: "#4B01D1", name: "Name", species: "Species" },
];
const Main = () => {
  const [openedUser, setOpenedUser] = useState();
  return (
    <div className="main__container">
      <div className="form__group">
        <div className="input__form">
          <label>
            <input type="text" required className="search" />
            <div className="label__text">Search by name</div>
            <SearchIcon />
          </label>
        </div>
      </div>
      <section className="cards" data-modal="#modal__project">
        {cards.map((elem) => (
          <Card setOpenedUser={setOpenedUser.bind(this, elem)} {...elem} />
        ))}
      </section>
      <UserModal
        user={openedUser}
        setOpenedUser={setOpenedUser.bind(this, null)}
      />
    </div>
  );
};

export default Main;
