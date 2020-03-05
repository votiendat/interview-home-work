import React, { Component } from "react";
import { Link } from "react-router-dom";
import Swiper from "swiper";
import $ from "jquery";

class Contact extends Component {
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
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.22290860918!2d106.67806595126125!3d10.79423226177659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528d4473e7265%3A0x52eb570d5342e7e9!2sZigvy%20Headquarter!5e0!3m2!1sen!2s!4v1583369806935!5m2!1sen!2s"
              width="100%"
              height="450"
              frameborder="0"
              allowfullscreen=""
              title="map"
            ></iframe>

            <h1 className="text-center mt-4 mb-4">
              Lorem ipsum dolor sit amet
            </h1>

            <form>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label for="inputEmail4">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail4"
                    placeholder="Email"
                  />
                </div>
                <div className="form-group col-md-6">
                  <label for="inputName">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputName"
                    placeholder="Name"
                  />
                </div>
              </div>
              <div className="form-group">
                <label for="inputAddress">Address</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputAddress"
                  placeholder="1234 Main St"
                />
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label for="inputCity">City</label>
                  <input type="text" className="form-control" id="inputCity" />
                </div>
                <div className="form-group col-md-4">
                  <label for="inputState">State</label>
                  <select id="inputState" className="form-control">
                    <option selected>Choose...</option>
                    <option>...</option>
                  </select>
                </div>
                <div className="form-group col-md-2">
                  <label for="inputZip">Zip</label>
                  <input type="text" className="form-control" id="inputZip" />
                </div>
              </div>
              <div className="form-group">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="gridCheck"
                  />
                  <label className="form-check-label" for="gridCheck">
                    Check me out
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="btn btn-warning w-100 text-light"
              >
                SIGN IN
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
