import React, { Component } from "react";
import { Link } from "react-router-dom";

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container posts">
        <div className="row search-box mt-5 mb-5">
          <div className="col">
            <div className="form-group has-search mb-0">
              <span className="fa fa-search form-control-feedback"></span>
              <input
                type="text"
                className="form-control"
                placeholder="Search Resources ..."
              />
            </div>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col">
            <p className="text-primary"><strong>LATEST</strong></p>
            <h1><strong>News and Tutorials</strong></h1>
          </div>
        </div>

        <div className="row posts-container flex-column">
          <div className="col post mb-4">
            <div className="card d-flex align-items-center flex-row bg-white p-4">
              <Link className="card-img-box" to="/details">
                <div className="card-img" style={{backgroundImage: `url(${require("../../assets/images/post-feature-image-1.jpg")})`}}></div>
              </Link>
              <div className="card-body">
                <p className="post-category text-warning mb-0">
                  <strong>UI/UX</strong>
                </p>

                <div className="post-tags mt-3 mb-3">
                  <span className="post-tag badge badge-primary">Blue</span>
                  <span class="post-tag badge badge-secondary">Light Grey</span>
                  <span class="post-tag badge badge-success">Green</span>
                  <span class="post-tag badge badge-danger">Red</span>
                  <span class="post-tag badge badge-warning">Yellow</span>
                  <span class="post-tag badge badge-info">Info</span>
                  <span class="post-tag badge badge-light">Light</span>
                  <span class="post-tag badge badge-dark">Dark</span>
                </div>

                <h4 className="post-title">
                  Lorem ipsum dolor sit amet consectetur
                </h4>
                <p className="post-excerpt text-secondary mt-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deleniti, similique explicabo molestias cupiditate assumenda
                  Deleniti, similique explicabo molestias cupiditate assumenda.
                  Deleniti, similique explicabo molestias cupiditate assumenda.
                </p>

                <p className="post-credential text-secondary">
                  Author:{" "}
                  <a href="/user" className="text-secondary">
                    <strong>Superman</strong>
                  </a>{" "}
                  - Create at: <strong>Mar 04, 2019</strong>
                </p>
              </div>
            </div>

            <div className="post-cmt pl-4 pr-4 pb-4">
              <a
                className="post-cmt-btn"
                data-toggle="collapse"
                href="#collapseExample"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                2 replies
              </a>

              <div className="replies-container collapse" id="collapseExample">
                <div className="replies-box card card-body d-flex flex-row">
                  <img
                    src={require("../../assets/images/man.svg")}
                    alt="avatar"
                    width="45px"
                    height="45px"
                    className="mr-3"
                  />
                  <div>
                    <div>
                      <h6>
                        BATMAN{" "}
                        <span className="text-secondary">1 days ago</span>
                      </h6>
                    </div>
                    <p className="mb-0">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. Nihil anim keffiyeh
                      helvetica, craft beer labore wes anderson cred nesciunt
                      sapiente ea proident.
                    </p>
                  </div>
                </div>

                <div className="replies-box card card-body d-flex flex-row">
                  <img
                    src={require("../../assets/images/man.svg")}
                    alt="avatar"
                    width="45px"
                    height="45px"
                    className="mr-3"
                  />
                  <div>
                    <div>
                      <h6>
                        BATMAN{" "}
                        <span className="text-secondary">2 days ago</span>
                      </h6>
                    </div>
                    <p className="mb-0">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. Nihil anim keffiyeh
                      helvetica, craft beer labore wes anderson cred nesciunt
                      sapiente ea proident.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Posts;
