import React, { Component } from "react";
import PageHeader from "../../Components/PageHeader/PageHeader";
import PostDetails from "../../Components/PostDetails/PostDetails";

class Details extends Component {
  render() {
    return (
      <div className="details">
        <PageHeader
          title="Lorem ipsum dolor sit"
          subTitle="Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore."
          backgroundImage="https://images.unsplash.com/photo-1511424443513-a00662140eeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2549&q=80"
        />

        <PostDetails />
      </div>
    );
  }
}

export default Details;
