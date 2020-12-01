import React, { useState, useEffect } from "react";
import classnames from "classnames";

const UserModal = ({ user, setOpenedUser }) => {
  const [show, setShow] = useState();
  const { fillColor = "#BB86FC", name = "Name", species = "Species" } =
    user || {};
  useEffect(() => setShow(true), []);
  return (
    <div
      className={classnames("modal", { show: show && user })}
      id="modal__project"
    >
      <div className="modal__dialog">
        <button className="modal__close" type="button" data-close>
          <img src="img/close.svg" alt="Close" onClick={setOpenedUser} />
        </button>

        <div className="modal__content">
          <div className="inform__block">
            <svg className="icon icon--inform" viewBox="0 0 80 80">
              <circle cx="40" cy="40" r="40" fill={fillColor} />
              <path
                d="M53 56H47.0703L31.8594 31.7891V56H25.9297V21.875H31.8594L47.1172 46.1797V21.875H53V56Z"
                fill="white"
              />
            </svg>
            <span className="user__name">{name}</span>
          </div>

          <div className="elements">
            <div className="el__block">
              <svg className="icon__modal" viewBox="0 0 18 20">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3 1L2 2 1 3H0v16h1v1h16v-1h1V3h-1l-1-1-1-1V0h-2v2H5V0H3v1zm13 12v5H2V7h14v6z"
                  fill="gray"
                />
              </svg>
              <span className="user__inform">Birth day</span>
            </div>
            <span className="inform__text">Birth day</span>

            <div className="el__block">
              <svg className="icon__modal" viewBox="0 0 18 20">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7 0L6 1H5L4 2H3L2 3v1L1 5v1L0 7v3l1 1 1 1v1l1 1 1 2h1v2h1l1 2h4l2-2v-1l1-1 1-2 1-1 1-1v-1h1v-1-2-1-1l-1-1-4-4h-1l-1-1H7zM6 7v1h1l1 2v2H6 5l-1-2H3V7h3zm9 0v3l-2 2h-3v-2l1-1V8l2-1h2zm-6 7l-1 1v-1h1zm1 0v0c0-1 0-1 0 0z"
                  fill="gray"
                />
              </svg>
              <span className="user__inform">Species</span>
            </div>
            <span className="inform__text">{species}</span>

            <div className="el__block">
              <svg className="icon__modal" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14 1v1h2v1l-2 1h-1V3h-3L9 4H8L7 6H6v5l1 1 1 1 1 1 1-1v-1l-1-1-1-2 1-3 2-1 3 1 1 1v6l1-1v-1l1-1V9 7h-1V6l1-2h1v2h2V0h-6v1zM9 7v1l1 1 1 1 1 2-1 2-3 1-2-1-1-1v-3-2L4 9H3v6H0l1 2v1l-1 1h1v1l1-1h1l1 1 1-1v-2h6v-1l2-1v-1l1-1v-1-2h-1V9l-1-1-1-1H9z"
                  fill="gray"
                />
              </svg>
              <span className="user__inform">Gender</span>
            </div>
            <span className="inform__text">Gender</span>

            <div className="el__block">
              <svg className="icon__modal" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9 0v1l2 1 1 1h1l1-1h1l-1-1h-1l-1-1H9zM5 1v1L4 3v3l1 1h1l1-1h1l1-1h1V4L8 2H7V1H5zm12 2h-1l-1 1h-1v1l1 1v1l1 1 1 2 1-1 2-2-1-1V5l-1-1-1-1zM1 5v2L0 8v2h1l2-3H2V6c0-2 0-2-1-1zm11 1h-1l-1 1H9L8 8H7v1H6v3h1v1h1v1h2l1-1h1v-1h1l1-1v-1-1-1l-1-1-1-1zm8 4l-1 1-1 2v3l1-2 1-1v-1-1-1zM2 11v1l-1 1v1l1 1v1l1 1h2v-1h1v-1-1l-1-1v-1H4l-1-1H2zm13 2l-1 1h-1l-1 1h-1v1h-1l2 2h1v1h2l1-1v-2-2l-1-1zm-7 4l-1 1H6v1h1v1h4l-2-2-1-1z"
                  fill="gray"
                />
              </svg>
              <span className="user__inform">Homeworld</span>
            </div>
            <span className="inform__text">Homeworld</span>

            <div className="el__block">
              <svg className="icon__modal" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8 0L7 1H6L5 2H4L2 4v1L1 6v1L0 8v4l1 1v1l1 1v1l2 2 1 1h1l1 1h6l1-1h1l1-1 1-1h1v3h2v-6a29 29 0 00-1-8V5l-1-1-2-2h-1l-1-1h-1l-1-1H8zm3 4v2c-1 2-4 0-2-2h2zM6 9v2c-1 2-4 0-2-2h2zm10 0v2c-1 2-4 0-2-2h2zm-5 0v1l-1 1-1-1 1-1h1zm0 5v2c-1 2-4 0-2-2h2z"
                  fill="gray"
                />
              </svg>
              <span className="user__inform">Films</span>
            </div>
            <span className="inform__text">Films</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserModal;
