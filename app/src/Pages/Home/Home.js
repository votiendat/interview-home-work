import React, { Component } from "react";
import FeaturePost from "../../Components/FeaturePost/FeaturePost";
import Posts from "../../Components/Posts/Posts";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <FeaturePost />
        <Posts />
      </div>
    );
  }
}

export default Home;
