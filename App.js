import React from "react";
import ReactDOM from "react-dom";

// const parent = React.createElement("h1", {}, "Hello");


const parent = React.createElement("div", { id: "one" }, 
React.createElement("div", { id: "two" }, 
React.createElement("div", { id: "three" },
[React.createElement("h1", { id: "header" },"hello...this is h1 tag from React in 4 div"),
React.createElement("h2", { id: "head2" },"hello...this is h2 tag from React in 4 div"),
React.createElement("p", { id: "para" },"hello...this is p tag from React in 4 div")
])));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);