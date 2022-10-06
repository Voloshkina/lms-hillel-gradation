import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const users = [
  {
    name: "Марина",
    img: "https://lms.ithillel.ua/uploads/images/2519ab52ca03245272dbdc09df2b8393.jpg?width=100&height=100",
    homeworks: [100, 50, 80, 100, 85, 100],
  },
  {
    name: "Елена",
    img: "https://lms.ithillel.ua/uploads/images/55abf3e83c16808834dacda675354944.jpg?width=100&height=100",
    homeworks: [100, 50, 80, 90, 85, 60],
  },
  {
    name: "Александр",
    img: "	https://lms.ithillel.ua/uploads/images/307b36412d16b4b1e87f4b3d914ab360.jpg?width=100&height=100",
    homeworks: [100, 100, 75, 90, 85, 60],
  },
  {
    name: "Павел",
    img: "https://lms.ithillel.ua/uploads/images/2dba89e3a2dc15a5352922664836f0bc.jpg?width=100&height=100",
    homeworks: [100, 50, 90, 90, 85, 50],
  },
  {
    name: "Николай",
    img: "	https://lms.ithillel.ua/assets/images/userpic.jpg",
    homeworks: [100, 80, 100, 90, 90, 100],
  },
  {
    name: "Оксана",
    img: "	https://lms.ithillel.ua/uploads/images/9635ebfb0d299223a7ea53144177ad33.jpg?width=100&height=100",
    homeworks: [100, 80, 100, 90, 100],
  },
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App users={users} />
  </React.StrictMode>
);
