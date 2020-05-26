import React from "react";
import MenuButton from "../MenuButton";
import "./home.css";

const Home = () => {
  //const el = useLoadingEffect("fade");
  //const name = useLoadingEffect("moveleft");
  // title = useLoadingEffect("moveup");

  return (
    <div className="hero">
      <MenuButton />
      <div className="row">
        <img src={require("../../Images/logo.png")} alt="logo" />
      </div>
      <div className="row">
        <section>
          <h1>WELCOME</h1>
          <p>
            My name is Kevin and I am a Frontend Web Developer here in
            Louisville, Ky. I love to create unique user experiences but most of
            all, I love to problem solve! Let me help you solve some of the
            problems troubling you.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Home;
