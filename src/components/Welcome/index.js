import React from "react";
import FadeIn from "react-fade-in";

import "./welcome.scss";

export default function Welcome(props) {
  return (
    <div className="welcome">
      <div className={props.visible ? "welcome__text" : "welcome__text hide"}>
        <FadeIn delay={750} transitionDuration={500}>
          <h3>welcome to</h3>
          <h1>Tournament Designer</h1>
        </FadeIn>
      </div>
    </div>
  );
}
