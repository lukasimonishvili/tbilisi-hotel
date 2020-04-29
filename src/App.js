import React from "react";
import "./App.css";
import Header from "./shared/header";
import { Router } from "@reach/router";
import ContactPage from "./pages/contact";
import AboutPage from "./pages/about";
import Footer from "./shared/footer";
import Gallery from "./pages/gallery";
import Rooms from "./pages/rooms";
import Wines from "./pages/wines";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Router>
        <ContactPage path="/contact" />
        <AboutPage path="about" />
        <Gallery path="gallery" />
        <Rooms path="rooms" />
        <Wines path="wines" />
      </Router>
      <Footer />
    </React.Fragment>
  );
}

export default App;
