import React, { Component } from "react";
import { Link } from "react-router-dom";

class FeaturePost extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container feature-post">
        <div className="row">
          <div className="col-8 feature-large feature-box">
            <div className="post card d-flex align-items-center flex-row bg-white p-4">
              <Link className="card-img-box" to="/details">
                <div
                  className="card-img"
                  style={{
                    backgroundImage: `url(${require("../../assets/images/post-feature-image-1.jpg")})`
                  }}
                ></div>
              </Link>

              <div className="card-body">
                <p className="post-category text-warning">
                  <strong>UI/UX</strong>
                </p>
                <h4 className="post-title">
                  <Link className="text-dark" to="/details">
                    Lorem ipsum dolor sit amet consectetur
                  </Link>
                </h4>
                <p className="post-excerpt text-secondary">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deleniti, similique explicabo molestias cupiditate assumenda
                  Deleniti, similique explicabo molestias cupiditate assumenda.
                </p>
              </div>
            </div>
          </div>
          <div className="col-4 feature-list feature-box bg-white p-4 d-flex align-items-centers flex-column justify-content-center">
            <div className="post-small card d-flex align-items-center flex-row bg-white">
              <Link className="card-img" to="/details">
                <img
                  src={require("../../assets/images/post-feature-image-1.jpg")}
                  alt="post-feature"
                />
              </Link>
              <div className="card-body">
                <h6 className="post-category text-warning mb-1">
                  <strong>TUTORIAL</strong>
                </h6>
                <h6 className="post-title">
                  <Link className="text-dark" to="/details">
                    Lorem ipsum dolor sit
                  </Link>
                </h6>
              </div>
            </div>

            <div className="post-small card d-flex align-items-center flex-row bg-white">
              <Link className="card-img" to="/details">
                <img
                  src={require("../../assets/images/post-feature-image-2.jpg")}
                  alt="post-feature"
                />
              </Link>
              <div className="card-body">
                <h6 className="post-category text-warning mb-1">
                  <strong>TUTORIAL</strong>
                </h6>
                <h6 className="post-title">
                  <Link className="text-dark" to="/details">
                    Lorem ipsum dolor sit
                  </Link>
                </h6>
              </div>
            </div>

            <div className="post-small card d-flex align-items-center flex-row bg-white">
              <Link className="card-img" to="/details">
                <img
                  src={require("../../assets/images/post-feature-image-3.jpg")}
                  alt="post-feature"
                />
              </Link>
              <div className="card-body">
                <h6 className="post-category text-warning mb-1">
                  <strong>TUTORIAL</strong>
                </h6>
                <h6 className="post-title">
                  <Link className="text-dark" to="/details">
                    Lorem ipsum dolor sit
                  </Link>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FeaturePost;
