import React, { Component } from "react";
import PostList from "./PostList";

export default class App extends Component {
  render() {
    return (
      <div className="ui container">
        App
        <PostList />
      </div>
    );
  }
}
