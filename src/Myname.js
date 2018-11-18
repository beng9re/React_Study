import React, { Component } from 'react';

class Myname extends Component {
  static defaultProps = {
    name: '기본이름'
  }; //디폴트 프롭스

  render() {
    return (
      <div>
        안녕하세요 제이름은
        <b>{this.props.name}</b>
      </div>
    );
  }
}
Myname.defaultProps = {
  name: 'defaf'
};

export default Myname;
