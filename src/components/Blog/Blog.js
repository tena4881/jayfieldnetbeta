import React, { Component } from "react";
import { Container, Row } from "reactstrap";

//Import Section Title
import SectionTitle from "../common/section-title";
import BlogBox from "./BlogBox";

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogs: [
        {
          image: "assets/images/blog/img-1.jpg",
          category: "UI & UX Design",
          title: "Doing a cross country road trip",
          desc:
            "She packed her seven versalia, put her initial into the belt and made herself on the way..",
        },
        {
          image: "assets/images/blog/img-2.jpg",
          category: "Digital Marketing",
          title: "New exhibition at our Museum",
          desc:
            "Pityful a rethoric question ran over her cheek, then she continued her way.",
        },
        {
          image: "assets/images/blog/img-3.jpg",
          category: "Travelling",
          title: "Why are so many people..",
          desc:
            "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
        },
      ],
    };
  }

  render() {
    return (
      <section className="section bg-light pt-5" id="blog">
        <Container>
          {/* section title */}
          <SectionTitle
            title="BLOG"
            desc="Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean class at a euismod mus luctus quam."
          />

          <Row className="mt-4">
            {/* blog box */}
            <BlogBox blogs={this.state.blogs} />
          </Row>
        </Container>
      </section>
    );
  }
}

export default Blog;
