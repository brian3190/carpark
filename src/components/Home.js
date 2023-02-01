import React, { Component } from 'react';

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { cp: [] }
  }

  getData() {
    console.log('fetching data from api');
    fetch('https://api.data.gov.sg/v1/transport/carpark-availability')
      .then(res => res.json())
      .then(data => {
        this.setState({ cp: data });
      })
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    const { cp } = this.state;
    return (
      <div className="container">
        <h1>Sample WEBAPP for CarPark</h1>
        <main>
          <div>
          <h2>SMALL</h2>
          <h4>HIGHEST</h4>
          <h5>HE12</h5>
          
          <h4>LOWEST</h4>
          <h5>HE01,HE02,GE04</h5>  
        </div>
        <div >
          <h2>MEDIUM</h2>
          <h4>HIGHEST</h4>
          <h5>HE12</h5>
          
          <h4>LOWEST</h4>
          <h5>HE01,HE02,GE04</h5> 
        </div>
        <div >
          <h2>BIG</h2>
          <h4>HIGHEST</h4>
          <h5>HE12</h5>
          
          <h4>LOWEST</h4>
          <h5>HE01,HE02,GE04</h5> 
        </div>
        <div >
          <h2>LARGE</h2>
          <h4>HIGHEST</h4>
          <h5>HE12</h5>
          
          <h4>LOWEST</h4>
          <h5>HE01,HE02,GE04</h5> 
        </div>
        </main>
      </div>
    );
  }
}
