import React, { useState } from "react";
import "./App.css";
import Header from "./shared/header";
import { Router } from "@reach/router";
import ContactPage from "./pages/contact";
import AboutPage from "./pages/about";
import Footer from "./shared/footer";
import Gallery from "./pages/gallery";
import Rooms from "./pages/rooms";
import Wines from "./pages/wines";
import Lcoations from "./pages/location";
import OneRoom from "./pages/oneRoom";
import Restaurants from "./pages/restaurants";
import Landing from "./pages/landing";

import HeaderTheme from "./contexts/headerContext";

function App() {
  const [theme, setTheme] = useState("light");
  return (
    <HeaderTheme.Provider value={setTheme}>
      <Header theme={theme} />
      <Router>
        <Landing path="/" />
        <ContactPage path="/contact" />
        <AboutPage path="about" />
        <Gallery path="gallery" />
        <Rooms path="rooms" />
        <Wines path="wines" />
        <Lcoations path="location" />
        <OneRoom path="room/:room" />
        <Restaurants path="restaurants" />
      </Router>
      <Footer />
    </HeaderTheme.Provider>
  );
}

export default App;
