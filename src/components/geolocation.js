import React from 'react'

export class Geolocation extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }
  getLocation() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
        this.props.onCoords(position.coords);
        this.setState({ loading: false });
      },
      (error) => console.warn(error)
    );
  }
  componentDidMount() {
    this.getLocation();
  }
  render() {
    const message = this.state.loading ? 'Loading...' : `Geolocate success.`;
    return <p>{message}</p>;
  }
}