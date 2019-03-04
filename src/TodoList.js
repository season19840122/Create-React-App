import React, { Component } from 'react';
// const Component = React.Component
import './TodoList.css'
import TodoItem from './TodoItem';   
import Test from './Test';

class TodoList extends Component {
  constructor(props) {
    super(props);
    // 当组件 state 或 props 发生变化，render 函数就会重新执行；
    this.state = {
      inputVal: '请输入',
      list: ['1', '2'],
      test: 'a'
    }
    this.handleInputClick = this.handleInputClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
  }

  render() {
    console.log('render');
    return (
      <>
        {/*多行注释*/}
        {
          //单行注释
        }
        <div>
          <label htmlFor="tips">输入内容：</label>
          <input
            id="tips"
            type="text" 
            className="ipt"
            value={this.state.inputVal}
            onClick={this.handleInputClick}
            onChange={this.handleInputChange}  
          />
          <button onClick={this.handleBtnClick}>提交</button>
        </div>
        <ul>
          {this.getTodoItem()}
        </ul>
        <Test content={this.state.test} />
      </>
    );
  }

  getTodoItem() {
    // 父子组件通信
   return this.state.list.map((item, index) => {
            return (
              <TodoItem
                key={index}
                content={item}
                index={index}
                onDeleteItem={this.handleDelete.bind(this, index)}
              ></TodoItem>
            )
            // return (
            //   <li 
            //     key={index} 
            //     onClick={this.handleDelete.bind(this, index)}
            //     dangerouslySetInnerHTML={{__html: item}}
            //   ></li>
            // )
        })
    
  }

  handleInputClick(e) {
    // 最新的写法是传一个方法，而不是对象，但是这个方法是异步的
    this.setState(() => ({
      inputVal: ''
    }));
  }

  handleInputChange(e) {
    // console.log(this)
    // 因为是异步方法，组件是会变化的，所以需要用常量来保存这个值
    const value = e.target.value;
    this.setState(() => ({
      inputVal: value
    }));
  }

  handleBtnClick(e) {
    // console.log(...this.state.list)
    if(!this.state.inputVal || this.state.inputVal === '请输入') return;
    this.setState((prevState) => ({
      inputVal: '',
      list: [...prevState.list, prevState.inputVal]
    }))
  }

  handleDelete(index) {
    this.setState((prevState) => {
      // console.log(index)
      const list = prevState.list;
      list.splice(index, 1);
      // 返回一个对象，只不过 es6 中如果同名可以省略
      return {list}
    })
  }
}

export default TodoList;
