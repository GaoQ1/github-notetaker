import React, { Component, PropTypes } from 'react';

export default class UserProfile extends Component {
  static propTypes = {
    username: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired
  }
  render(){
    return (
      <div>
        <p> 基本信息 </p>
        <p> 姓名：{this.props.username} </p>
        <p> 介绍：{this.props.bio.name} </p>
      </div>
    )
  }
}
