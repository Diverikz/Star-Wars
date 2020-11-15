import React, {useState} from 'react';
import Header from './header';
import Main from "./main";
import Footer from "./footer";

const app = () => {
  const [currentUser,setCurrentUser] = useState()

  return <div className="bg__container">
    <Header/>
    <Main setCurrentUser/>
    <Footer/>
    {/*<div className="modal" id="modal__project">*/}
    {/*  <div className="modal__dialog">*/}
    {/*    <button className="modal__close" type="button" data-close>*/}
    {/*      <img src="img/close.svg" alt="Close"/>*/}
    {/*    </button>*/}

    {/*    <div className="modal__content">*/}
    {/*      <div className="inform__block">*/}
    {/*        <svg className="icon icon--inform">*/}
    {/*          <use xlink:href="#first"/>*/}
    {/*        </svg>*/}
    {/*        <span className="user__name">Name</span>*/}
    {/*      </div>*/}

    {/*      <div className="elements">*/}
    {/*        <div className="el__block">*/}
    {/*          <svg className="icon__modal">*/}
    {/*            <use xlink:href="#Birth"/>*/}
    {/*          </svg>*/}
    {/*          <span className="user__inform">Birth day</span>*/}
    {/*        </div>*/}
    {/*        <span className="inform__text">Birth day</span>*/}

    {/*        <div className="el__block">*/}
    {/*          <svg className="icon__modal">*/}
    {/*            <use xlink:href="#Species"/>*/}
    {/*          </svg>*/}
    {/*          <span className="user__inform">Species</span>*/}
    {/*        </div>*/}
    {/*        <span className="inform__text">Species</span>*/}

    {/*        <div className="el__block">*/}
    {/*          <svg className="icon__modal">*/}
    {/*            <use xlink:href="#Gender"/>*/}
    {/*          </svg>*/}
    {/*          <span className="user__inform">Gender</span>*/}
    {/*        </div>*/}
    {/*        <span className="inform__text">Gender</span>*/}

    {/*        <div className="el__block">*/}
    {/*          <svg className="icon__modal">*/}
    {/*            <use xlink:href="#Homeworld"/>*/}
    {/*          </svg>*/}
    {/*          <span className="user__inform">Homeworld</span>*/}
    {/*        </div>*/}
    {/*        <span className="inform__text">Homeworld</span>*/}

    {/*        <div className="el__block">*/}
    {/*          <svg className="icon__modal">*/}
    {/*            <use xlink:href="#Films"/>*/}
    {/*          </svg>*/}
    {/*          <span className="user__inform">Films</span>*/}
    {/*        </div>*/}
    {/*        <span className="inform__text">Films</span>*/}
    {/*      </div>*/}
    {/*      <!-- elements -->*/}
    {/*    </div>*/}
    {/*    <!-- modal__content -->*/}
    {/*  </div>*/}
    {/*  <!-- modal__dialog -->*/}
    {/*</div>*/}
  </div>
}

export default app

// $(function () {
//   const modalCall = $("[data-modal]");
//   const modalClose = $("[data-close]");
//
//   modalCall.on("click", function (event) {
//     event.preventDefault();
//
//     let $this = $(this);
//     let modalId = $this.data("modal");
//
//     $(modalId).addClass("show");
//     $("body").addClass("no-scroll");
//
//     setTimeout(function () {
//       $(modalId).find(".modal__dialog").css({
//         transform: "scale(1)",
//       });
//     }, 200);
//   });
//
//   modalClose.on("click", function (event) {
//     event.preventDefault();
//
//     let $this = $(this);
//     let modalParent = $this.parents(".modal");
//
//     modalParent.find(".modal__dialog").css({
//       transform: "scale(0)",
//     });
//
//     setTimeout(function () {
//       modalParent.removeClass("show");
//       $("body").removeClass("no-scroll");
//     }, 200);
//   });
//
//   $(".modal").on("click", function (event) {
//     let $this = $(this);
//
//     $this.find(".modal__dialog").css({
//       transform: "scale(0)",
//     });
//
//     setTimeout(function () {
//       $this.removeClass("show");
//       $("body").removeClass("no-scroll");
//     }, 200);
//   });
//
//   $(".modal__dialog").on("click", function (event) {
//     event.stopPropagation();
//   });
// });
