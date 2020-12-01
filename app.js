import React, { useState } from "react";
import Header from "./header";
import Main from "./main";
import Footer from "./footer";

const app = () => {
  const [currentUser, setCurrentUser] = useState();

  return (
    <div className="bg__container">
      <Header />
      <Main setCurrentUser />
      <Footer />
    </div>
  );
};

export default app;
