import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  constructor() {
    super();
    this.state = {
      sushis: [],
      current: [],
      eaten: [],
    }
  }

  componentDidMount() {
    this.getSushis();
  }

  getSushis = () => {
    fetch(API)
    .then(resp => resp.json())
    .then(data => {
      this.setState({sushis: data, current: data.slice(0, 4)})
    })
  }

  orderSushi = (sushi) => {

  }

  render() {
    return (
      <div className="app">
        <SushiContainer current={this.state.current} onOrderSushi={this.orderSushi}/>
        <Table />
      </div>
    );
  }
}

export default App;