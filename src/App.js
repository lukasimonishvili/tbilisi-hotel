import React from "react";
import "./App.css";
import Header from "./shared/header";
import { Router } from "@reach/router";
import ContactPage from "./pages/contact";
import Footer from "./shared/footer";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Router>
        <ContactPage path="/contact" />
      </Router>
      <Footer />
    </React.Fragment>
  );
}

export default App;
