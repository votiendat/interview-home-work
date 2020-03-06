import React, { Component } from "react";
import PageHeader from "../../Components/PageHeader/PageHeader";
import AboutDetails from "../../Components/About/About";

class About extends Component {
  render() {
    return (
      <div className="about">
        <PageHeader
          title="About Us"
          subTitle="Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squi, nihil anim."
          backgroundImage="https://zigvy.com/wp-content/uploads/2019/07/18192550_1286826404765545_6819697274981970225_o.jpg"
        />

        <AboutDetails />
      </div>
    );
  }
}

export default About;
