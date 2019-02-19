import React, { Component } from "react";
import { connect } from "react-redux";

class UserHeader extends Component {
  render() {
    console.log(this.props);
    const { user } = this.props;
    if (!user) return null;
    return <div className="header">{user.name}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return { user: state.users.find(user => user.id === ownProps.userId) }; // ownProps.userId is the this.props.userId in the component
};

export default connect(mapStateToProps)(UserHeader);
