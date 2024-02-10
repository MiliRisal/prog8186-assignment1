import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Body from "./MyComponents/Body/Body";
import Header from "./MyComponents/Header";
import Footer from "./MyComponents/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Body />
      <Footer />
    </Router>
  );
}

export default App;
