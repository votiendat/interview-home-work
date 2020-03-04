import React, { Component } from "react";
import { Link } from "react-router-dom";
import Swiper from "swiper";
import $ from "jquery";

class Details extends Component {
  sharePostHandler = () => {
    var shareUrl = "https://zigvy.com/";

    var SocialShares = {
      fb: {
        url: "https://graph.facebook.com/?id=",
        callback: function(data) {
          console.log("fb", data);
          if (data && data.shares) {
            this.count = data.shares;
          } else {
            this.count = 0;
          }
        },
        share: "https://www.facebook.com/sharer/sharer.php?u="
      },

      tw: {
        url: "https://cdn.api.twitter.com/1/urls/count.json?url=",
        callback: function(data) {
          console.log("tw", data);
          if (data && data.count) {
            this.count = data.count;
          } else {
            this.count = 0;
          }
        },
        share: "https://twitter.com/intent/tweet?url="
      },
      ln: {
        url: "https://www.linkedin.com/countserv/count/share?format=jsonp&url=",
        callback: function(data) {
          console.log("ln", data);
          if (data && data.count) {
            this.count = data.count;
          } else {
            this.count = 0;
          }
        },
        share: "https://www.linkedin.com/cws/share?url="
      }
    };

    $(function() {
      $("[data-social]").each(function() {
        var $this = $(this),
          social = $this.data("social"),
          oSocial;

        if (SocialShares.hasOwnProperty(social)) {
          oSocial = SocialShares[social];

          if (oSocial.url) {
            $.getScript(
              oSocial.url +
                shareUrl +
                "&callback=SocialShares." +
                social +
                ".callback",
              function(data, textStatus, jqxhr) {
                $this.attr("data-count", oSocial.count);
              }
            );
          }

          if (oSocial.share) {
            $this.on("click", function() {
              window.open(
                oSocial.share + shareUrl,
                "",
                "menubar=no,toolbar=no,resizable=yes" +
                  ",scrollbars=yes" +
                  ",height=300,width=600"
              );
            });
          }
        }
      });
    });
  };

  relativePostSlider = () => {
    new Swiper(".swiper-container", {
      slidesPerView: 3,
      spaceBetween: 30,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
    });
  };

  componentDidMount() {
    this.sharePostHandler();
    this.relativePostSlider();
  }

  render() {
    return (
      <div className="post-details container">
        <div className="row post-actions">
          <div className="col d-flex flex-row align-items-center justify-content-between">
            <Link classaName="post-back" to="/">
              <h5 className="text-light">
                <i className="fa fa-angle-left" aria-hidden="true"></i> Back
              </h5>
            </Link>

            <div className="social">
              <div className="social__item">
                <span
                  className="fa fa-facebook"
                  data-count="..."
                  data-social="fb"
                ></span>
              </div>
              <div className="social__item">
                <span
                  className="fa fa-twitter"
                  data-count="..."
                  data-social="tw"
                ></span>
              </div>
              <div className="social__item">
                <span
                  className="fa fa-linkedin"
                  data-count="..."
                  data-social="ln"
                ></span>
              </div>
            </div>
          </div>
        </div>

        <div className="row post-details-content bg-white p-5">
          <div className="col">
            <h1 className="text-center mb-4">Lorem ipsum dolor sit amet</h1>
            <div className="content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Suscipit minima ea amet. Perferendis alias, pariatur, vitae
                illum magnam sequi deserunt esse, eligendi aliquam quo
                laboriosam at? Delectus mollitia blanditiis nobis. Lorem ipsum
                dolor sit amet, consectetur adipisicing elit. Suscipit minima ea
                amet. Perferendis alias, pariatur, vitae illum magnam sequi
                deserunt esse, eligendi aliquam quo laboriosam at? Delectus
                mollitia blanditiis nobis.
              </p>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Suscipit minima ea amet. Perferendis alias, pariatur, vitae
                illum magnam sequi deserunt esse, eligendi aliquam quo
                laboriosam at? Delectus mollitia blanditiis nobis. Lorem ipsum
                dolor sit amet, consectetur adipisicing elit. Suscipit minima ea
                amet. Perferendis alias, pariatur, vitae illum magnam sequi
                deserunt esse, eligendi aliquam quo laboriosam at? Delectus
                mollitia blanditiis nobis.
              </p>

              <p>
                <img
                  src={require("../../assets/images/post-feature-image-2.jpg")}
                  className="img-fluid"
                  alt="post-img"
                />
                <small>
                  <em>
                    UI/UX consectetur adipisicing elit eligendi aliquam quo
                    laboriosam at? Delectus mollitia blanditiis nobis.
                  </em>
                </small>
              </p>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Suscipit minima ea amet. Perferendis alias, pariatur, vitae
                illum magnam sequi deserunt esse, eligendi aliquam quo
                laboriosam at? Delectus mollitia blanditiis nobis. Lorem ipsum
                dolor sit amet, consectetur adipisicing elit. Suscipit minima ea
                amet. Perferendis alias, pariatur, vitae illum magnam sequi
                deserunt esse.
              </p>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Suscipit minima ea amet. Perferendis alias, pariatur, vitae
                illum magnam sequi deserunt esse, eligendi aliquam quo
                laboriosam at? Delectus mollitia blanditiis nobis. Lorem ipsum
                dolor sit amet, consectetur adipisicing elit. Suscipit minima ea
                amet. Perferendis alias, pariatur, vitae illum magnam sequi
                deserunt esse, eligendi aliquam quo laboriosam at? Delectus
                mollitia blanditiis nobis.
              </p>
            </div>
          </div>
        </div>

        <div className="row mt-5 mb-3">
          <div className="col p-0">
            <p className="text-primary">
              <strong>RELATIVE</strong>
            </p>
            <h1>
              <strong>Posts and Tutorials</strong>
            </h1>
          </div>
        </div>

        <div className="row post-relative">
          <div className="col p-0">
            <div className="swiper-container">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div class="card">
                    <img
                      class="card-img-top"
                      src={require("../../assets/images/post-feature-image-1.jpg")}
                      alt="Card img cap"
                    />
                    <div class="card-body">
                      <h5 class="card-title">Post Title</h5>
                      <p class="card-text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Lorem ipsum dolor sit amet, consectetur.
                      </p>
                      <a href="/" class="btn btn-warning">
                        Read more
                      </a>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div class="card">
                    <img
                      class="card-img-top"
                      src={require("../../assets/images/post-feature-image-1.jpg")}
                      alt="Card img cap"
                    />
                    <div class="card-body">
                      <h5 class="card-title">Post Title</h5>
                      <p class="card-text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Lorem ipsum dolor sit amet, consectetur.
                      </p>
                      <a href="/" class="btn btn-warning">
                        Read more
                      </a>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div class="card">
                    <img
                      class="card-img-top"
                      src={require("../../assets/images/post-feature-image-1.jpg")}
                      alt="Card img cap"
                    />
                    <div class="card-body">
                      <h5 class="card-title">Post Title</h5>
                      <p class="card-text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Lorem ipsum dolor sit amet, consectetur.
                      </p>
                      <a href="/" class="btn btn-warning">
                        Read more
                      </a>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div class="card">
                    <img
                      class="card-img-top"
                      src={require("../../assets/images/post-feature-image-1.jpg")}
                      alt="Card img cap"
                    />
                    <div class="card-body">
                      <h5 class="card-title">Post Title</h5>
                      <p class="card-text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Lorem ipsum dolor sit amet, consectetur.
                      </p>
                      <a href="/" class="btn btn-warning">
                        Read more
                      </a>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div class="card">
                    <img
                      class="card-img-top"
                      src={require("../../assets/images/post-feature-image-1.jpg")}
                      alt="Card img cap"
                    />
                    <div class="card-body">
                      <h5 class="card-title">Post Title</h5>
                      <p class="card-text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Lorem ipsum dolor sit amet, consectetur.
                      </p>
                      <a href="/" class="btn btn-warning">
                        Read more
                      </a>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div class="card">
                    <img
                      class="card-img-top"
                      src={require("../../assets/images/post-feature-image-1.jpg")}
                      alt="Card img cap"
                    />
                    <div class="card-body">
                      <h5 class="card-title">Post Title</h5>
                      <p class="card-text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Lorem ipsum dolor sit amet, consectetur.
                      </p>
                      <a href="/" class="btn btn-warning">
                        Read more
                      </a>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div class="card">
                    <img
                      class="card-img-top"
                      src={require("../../assets/images/post-feature-image-1.jpg")}
                      alt="Card img cap"
                    />
                    <div class="card-body">
                      <h5 class="card-title">Post Title</h5>
                      <p class="card-text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Lorem ipsum dolor sit amet, consectetur.
                      </p>
                      <a href="/" class="btn btn-warning">
                        Read more
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div class="swiper-button-next"></div>
              <div class="swiper-button-prev"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Details;
