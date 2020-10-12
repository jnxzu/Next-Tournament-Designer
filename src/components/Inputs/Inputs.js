import React from "react";
import { CSSTransitionGroup } from "react-transition-group";
import NewOrUpload from "./NewOrUpload";

import "./inputs.scss";
import "./transition.css";

export default function Inputs() {
  // new/upload
  // new -> league/tournament
  // league -> # teams -> input teams -> points? -> round robin -> sorting rules -> generate fixtures?
  // tournament -> # teams(even) -> groups? -> seeding? -> input teams -> points? -> round robin -> sorting rules -> byes -> for each stage needed stage rules (two legged, etc) -> generate fixtures
  // upload -> OK

  return (
    <div className="inputs">
      <CSSTransitionGroup transitionName="input-swap">
        <NewOrUpload />
      </CSSTransitionGroup>
    </div>
  );
}
