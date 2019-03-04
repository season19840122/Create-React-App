import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
  constructor(props) {
    super(props);
    // 这样可以节约性能
    this.handleItemDelete = this.handleItemDelete.bind(this);
  }

  render() {
    console.log('render TodoItem')
    const {prefix, content} = this.props;
    let merge = `${prefix} - ${content}`;
    return (
      <>
        <li 
          onClick={this.handleItemDelete}
          dangerouslySetInnerHTML={{__html: merge}}
        ></li>
      </>
    );
  }

  handleItemDelete(){
    const {onDeleteItem, index} = this.props;
    onDeleteItem(index);
  }
}

TodoItem.propTypes = {
  content: PropTypes.string
}

TodoItem.defaultProps = {
  prefix: 'Hello World'
}

export default TodoItem;
