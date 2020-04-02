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
      money: 100
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
    if (!this.state.eaten.includes(sushi) && this.state.money-sushi.price>=0) {
      this.setState(prevState => {
        return {
          eaten: [...prevState.eaten, sushi],
          money: prevState.money - sushi.price
        }
      })
    }
  }

  makeMoreSushi = () => {
    let id = this.state.current[3].id
    this.setState({
      current: this.state.sushis.slice(id, id+4)
    })
  }

  render() {
    return (
      <div className="app">
        <SushiContainer current={this.state.current} eaten={this.state.eaten}onOrderSushi={this.orderSushi} onMakeMoreSushi={this.makeMoreSushi}/>
        <Table money={this.state.money} eaten={this.state.eaten}/>
      </div>
    );
  }
}

export default App;