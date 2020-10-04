import React, { useEffect, useState } from "react";

import Welcome from "./Welcome";
import Inputs from "./Inputs";
import Tournament from "./Tournament";

export default function App() {
  const [progress, setProgress] = useState("welcome");
  const [welcomeOpacity, setWelcomeOpacity] = useState(true);

  useEffect(() => {
    const welcomeHide = setTimeout(() => {
      setWelcomeOpacity(false);
      setTimeout(() => setProgress("inputs"), 500);
    }, 3000);
    return () => {
      clearTimeout(welcomeHide);
    };
  });

  return (
    <div className="app">
      {progress === "welcome" && <Welcome visible={welcomeOpacity} />}
      {progress === "inputs" && <Inputs />}
      {progress === "tournament" && <Tournament />}
    </div>
  );
}
