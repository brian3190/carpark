import logo from './logo.svg';
import React, { Component } from 'react';
//import { Route } from 'react-router';
//import { Home } from './components/Home';
//import { Layout } from './components/Layout';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [], loading: true }
  }

  componentDidMount() {
    this.populateCarparkData();
  }

  static renderCarpark(data) {
    return (
      <div>
          <div >
            <h2>SMALL</h2>
            <h2>HIGHEST</h2>
            <p>
            {[data].map(c => (
              <h3>
                {c.items.carpark_data.carpark_number}
              </h3>
            ))}
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
      </div>
    )
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em><br/><img src={logo} className="App-logo" alt="logo" /></p>
      : App.renderCarpark(this.state.carpark_data);
    
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Sample WEBAPP for Carpark
          </p>
        </header>
        {contents}
      </div>
    );

  
  // render () {
  //   return (
  //     <Layout>
  //       <Route exact path='/' component={Home} />
  //       <Route path='/fetch-data' component={FetchData} />
  //     </Layout>
  //   );
  }
  
  async populateCarparkData() {
    const response = await fetch('https://api.data.gov.sg/v1/transport/carpark-availability');
    const data = await response.json();
    this.setState({ carpark_data: data, loading: false });
  }
}