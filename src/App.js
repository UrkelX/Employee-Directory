import React from 'react';
import './App.css';
import axios from "axios";

class App extends React.Component {

  state = {
    employees: [],
  };

  componentDidMount() {
      axios.get(`https://randomuser.me/api/?results=20`)
        .then(res => {
          this.setState({ employees: res.data.results });
        });
  }


  render() {
    return (
      <div className="App">
        {this.state.employees.length}
      </div>
    );
  }
}

export default App;

