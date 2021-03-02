import React, { Component } from "react";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";

class BlogBox extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.blogs.map((blog, key) => (
          <Col key={key} lg={4}>
            <div className="blog-box mt-4 hover-effect">
              <img src={blog.image} className="img-fluid" alt="blog" />
              <div>
                <h5 className="mt-4 text-muted">{blog.category}</h5>
                <h4 className="mt-3">
                  <Link to="#" className="blog-title">
                    {" "}
                    {blog.title}{" "}
                  </Link>
                </h4>
                <p className="text-muted">{blog.desc}</p>
                <div className="mt-3">
                  <Link to="#" className="read-btn">
                    Read More <i className="mdi mdi-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </Col>
        ))}
      </React.Fragment>
    );
  }
}

export default BlogBox;
