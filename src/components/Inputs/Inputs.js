import React, { useState } from "react";
import NewOrUpload from "./NewOrUpload";
import Name from "./Name";

import "./inputs.scss";

export default function Inputs() {
  const [inputStage, setInputStage] = useState("");

  // new/upload
  // new -> league/tournament
  // league -> # teams -> input teams -> points? -> round robin -> sorting rules
  // tournament -> # teams(even) -> groups? -> seeding? -> input teams -> points? -> round robin -> sorting rules -> byes -> for each stage needed stage rules (two legged, etc)
  // upload -> OK

  function renderSwitch(val) {
    switch (val) {
      case "name":
        return <Name />;

      default:
        return <NewOrUpload click={() => setInputStage("name")} />;
    }
  }

  return <div className="inputs">{renderSwitch(inputStage)}</div>;
}
