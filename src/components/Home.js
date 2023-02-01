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
      <div>
        <h1>Sample WEBAPP for CarPark</h1>
        <main>
          <div>
          <h2>SMALL</h2>
          <h2>HIGHEST</h2>
          <p>

          </p>  
        </div>
        <div >
          <h2>MEDIUM</h2>
          <h2>HIGHEST</h2>
          <p>

          </p>  
        </div>
        <div >
          <h2>BIG</h2>
          <h2>HIGHEST</h2>
          <p>

          </p>  
        </div>
        <div >
          <h2>LARGE</h2>
          <h2>HIGHEST</h2>
          <p>

          </p>  
        </div>
      </main>
        
        <p>The <code>ClientApp</code> subdirectory is a standard React application based on the <code>create-react-app</code> template. If you open a command prompt in that directory, you can run <code>npm</code> commands such as <code>npm test</code> or <code>npm install</code>.</p>
      </div>
      
    );
  }
}
