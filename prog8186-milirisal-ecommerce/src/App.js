import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Body from "./MyComponents/Body/Body";
import Header from "./MyComponents/Header";
import Footer from "./MyComponents/Footer";
import { ShopContextProvider } from "./MyComponents/Body/ShopContext";

function App() {
  return (
    <ShopContextProvider>
      <Router>
        <Header />
        <Body />
        <Footer />
      </Router>
    </ShopContextProvider>
  );
}

export default App;
