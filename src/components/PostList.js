import React, { Component } from "react";
import { fetchPosts } from "../actions";
import { connect } from "react-redux";

export class PostList extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return <div>PostList</div>;
  }
}

export default connect(null, { fetchPosts })(PostList);
