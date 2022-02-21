import React, { Component } from "react";
import { fetchPosts } from "../actions";
import { connect } from "react-redux";

export class PostList extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    console.log(this.props);
    return <div>{this.props.posts.length}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

export default connect(mapStateToProps, { fetchPosts })(PostList);
