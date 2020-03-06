import React, { Component } from "react";

class PageHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title,
      subTitle: props.subTitle,
      backgroundImage: props.backgroundImage,
      backgroundShape: require("../../assets/images/wave.svg")
    };
  }

  render() {
    return (
      <div className="page-header-container">
        <div
          className="page-header"
          style={{ backgroundImage: `url(${this.state.backgroundImage})` }}
        >
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 col-lg-8 ml-auto mr-auto text-center text-light">
                <h1 className="title mb-4">{this.props.title}</h1>
                <p className="container sub-title">{this.props.subTitle}</p>
              </div>
            </div>
          </div>
        </div>

        <svg
          className="page-header-shape"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,224L40,213.3C80,203,160,181,240,186.7C320,192,400,224,480,245.3C560,267,640,277,720,277.3C800,277,880,267,960,266.7C1040,267,1120,277,1200,272C1280,267,1360,245,1400,234.7L1440,224L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          ></path>
        </svg>
      </div>
    );
  }
}

export default PageHeader;
