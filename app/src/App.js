import React, { Component } from "react";
import "./App.scss";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";

import { Route, BrowserRouter } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import PageHeader from "./Components/PageHeader/PageHeader";

import Home from "./Pages/Home/Home";
import User from "./Pages/User/User";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <PageHeader
          title="Zigvy Test Homework"
          subTitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae modi necessitatibus, quod ratione temporibus magnam sequi recusandae expedita molestiae eaque."
          backgroundImage="https://lh3.googleusercontent.com/lzZFw0HS35wQO6OFs3QO10ULUwXDSPRwujTvghnz2wKOhn7nCEs4ddrMBXPV5Z8T-nbexIbb75AT5JkRJatcs-CxfE4npQ0Br0u7ZixbPoLbEmQqn-Uthybuc5fGaK7CCVO1A9n2JjVxDZy24q6vDzgPfut7ErVYmIafeJ84Rx2e_ZgHdwe8d5EmKsgBtw0EFtyD3ZKMWWx83lEw3CRxZPm65tpz8H1T4jOHolKpS45IMmMrYlxtPzqQAKk8sdtxgDxnVwKM-YJkA6DVa33Wm7bpQEN4Bn1RB6eLgoJx1SpTRnHJJ7iHiLMfa_PeM24TR8Jk0w69CzfxBCyKsVK6JQBbRBWU89FE2hvR0QwX8LO8vfhCPorL71knp840EpYHSAwmTseuJ66fK4hVKsjV2UnLgB7ez7B8peg11D5aRNPxpeXZE0dNnSKNDnXnWS_igqZey6sjq6Y2_c6C-IqmvWSrXe6mE-S0_rSMjU1GfzfG1Pfq99JDSTFd6FC-ipFY_4lFs8exg8muhL9rdrl5ec4wgmyTTNTnjXJocFgzJPPExTCjFdTxT23l24z4NHS66LMsvyxbi0Xh6hme0IT_ZlqO_bZpHpOlo91hWUgV1FMaqeyxcOx8jbd1HzmMWp5K4jDzQySwNKYCGedmLUcSWofEO0cg5jtq_t9hJkTrG-Ec1dZikPPQnXU=w1920-h1280-no"
        />

        <div className="wrapper">
          <div className="main">
            <Route path="/" exact component={Home} />
            <Route path="/user" exact component={User} />
          </div>
        </div>

        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
