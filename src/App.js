import React, { Component } from 'react';
import { Input } from 'semantic-ui-react'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfDice: 1,
      sidesOfDice: 20,
      modifier: 0,
      total: 0
    };

    this.handleChange = this.handleChange.bind(this);
    this.roll = this.roll.bind(this);
  }

  handleChange(key, value) {
    this.setState({ [key]: Math.floor(value) });
  }

  roll() {
    const {
      numberOfDice,
      sidesOfDice,
      modifier
    } = this.state;
    let total = 0;

    for (let i = 0; i < numberOfDice; i++) {
      total += Math.floor(Math.random() * sidesOfDice) + 1;
    }

    total += modifier;

    this.setState({ total });
  }

  render() {
    const {
      numberOfDice,
      sidesOfDice,
      modifier,
      total
    } = this.state;

    return (
      <div className="App">
        <span>roll</span>
        <Input
          type="number"
          value={numberOfDice}
          size='big'
          onChange={(event) => { this.handleChange('numberOfDice', event.target.value); }} />
        <span>d</span>
        <Input
          type="number"
          value={sidesOfDice}
          size='big'
          onChange={(event) => { this.handleChange('sidesOfDice', event.target.value); }} />
        <span>+</span>
        <Input
          type="number"
          value={modifier}
          size='big'
          onChange={(event) => { this.handleChange('modifier', event.target.value); }} />
        <div onClick={this.roll}>roll</div>
        <div>{total}</div>
      </div>
    );
  }
}

export default App;
