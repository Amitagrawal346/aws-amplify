import logo from './logo.svg';
import './App.css';
import React from 'react';


class Test extends React.PureComponent {
  constructor(props){
    super(props)
    this.state = {count:0,};
  }

  increment = () => {
    this.setState({count:0})
   }

  render(){
    console.log("normal component")
    return (
      <>
      <h1>Normal Component</h1>
      {this.state.count}
      <button onClick={this.increment}>increment</button>
      <button onClick={this.increment}>decrement</button>
      <button onClick={this.increment}>decrement2</button>
      <button onClick={this.increment}>decrement3</button>
      </>
    )
  }
}
export default Test

