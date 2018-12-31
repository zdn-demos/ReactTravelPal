import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Geolocation } from './components/geolocation';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { lat: null, lng: null };
    this.handleCoords = this.handleCoords.bind(this);
  }
  handleCoords(coords) {
    this.setState({ lat: coords.latitude, lng: coords.longitude });
  }
  render() {
    return (
      <div className="App">
        <Geolocation onCoords={this.handleCoords} />
      </div>
    );
  }
}

export default App;
