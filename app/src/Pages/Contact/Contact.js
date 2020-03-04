import React, { Component } from "react";
import PageHeader from "../../Components/PageHeader/PageHeader";
import ContactDetails from "../../Components/Contact/Contact";

class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <PageHeader
          title="Contact Us"
          subTitle="Anim pariatur cliche reprehenderit, enim eiusmod high life."
          backgroundImage="https://zigvy.com/wp-content/uploads/2019/07/14712479_1092171267564394_3239980596018325769_o.jpg"
        />

        <ContactDetails />
      </div>
    );
  }
}

export default Contact;
