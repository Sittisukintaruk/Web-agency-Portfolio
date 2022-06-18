import React from "react";
import Nav from "./component/Nav";
import Footer from "./component/Footer";
import Main from "./component/Main";
import CustomArrowExample from "./component/CustomArrowExample";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./sass/main.css";
import NotFound from "./component/NotFound";

function App() {
  return (
    <Router>
      <Nav />
      <Main />
      <Footer />
      <CustomArrowExample />
    </Router>
  );
}

export default App;
