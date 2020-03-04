import React, { Component } from "react";
import "./App.scss";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";

import { Route, BrowserRouter } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Details from "./Pages/Details/Details";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />

        <div className="wrapper">
          <div className="main">
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/details" exact component={Details} />
          </div>
        </div>

        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
