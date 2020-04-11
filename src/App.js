import React, { Component } from 'react';
// import logo from './logo.svg';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(response => this.setState({ monsters: response }));
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value });
  }
  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLocaleLowerCase()));
    return (
      <div className="App">
        {/* <header className="App-header"> */}

        <h1>Kazim's Rolodex</h1>
        <SearchBox
          placeholder="search monsters"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
        {/* </header> */}
      </div>
    );
  }
}


export default App;
