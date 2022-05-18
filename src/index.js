import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
const rooterElement = document.getElementById("root");
const con = createRoot(rooterElement);
con.render(<App />);
