import React, { Component } from 'react';

class Test extends Component {
  render() {
    // 当父组件的 render 函数被执行，子组件的 render 函数也会被重新执行；
    console.log('render Test');
    return (
      <div>
        { this.props.content }
      </div>
    );
  }
}

export default Test;