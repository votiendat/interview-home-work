import React, { Component } from "react";

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container posts">
        <div className="row">
          <div className="col">SEARCH BOX</div>
        </div>
        <div className="row">
          <div className="col">POSTS</div>
          <div className="col">POSTS</div>
          <div className="col">POSTS</div>
          <div className="col">POSTS</div>
          <div className="col">POSTS</div>
          <div className="col">POSTS</div>
          <div className="col">POSTS</div>
        </div>
      </div>
    );
  }
}

export default Posts;
