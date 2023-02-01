import logo from './logo.svg';
import React, { Component } from 'react';
import axios from 'axios';
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
    setTimeout(() => {
      axios.get('https://api.data.gov.sg/v1/transport/carpark-availability')
        .then(resp => {
          console.log(resp);
        this.setState({
          data: resp.data.items[0].carpark_data,
          loading: false
        })
      })
      .catch(console.error);
    }, 1000);
  }

  static renderCarpark(data) {
    return (
      <div>
        <div >
          <h2>SMALL</h2>
          <h4>HIGHEST</h4>
          <div>
            {data.length}
          </div>
          <h4>LOWEST</h4>
          <div>
            {data[0].carpark_number}
          </div> 
        </div>
        <div >
          <h2>MEDIUM</h2>
          <h4>HIGHEST</h4>
          <div>
            {data.length}
          </div>
          <h4>LOWEST</h4>
          <div>
            {data.length}
          </div>
        </div>
        <div>
          <h2>BIG</h2>
          <h4>HIGHEST</h4>
          <div>
            {data.length}
          </div>
          <h4>LOWEST</h4>
          <div>
            {data.length}
          </div>
        </div>
        <div>
          <h2>LARGE</h2>
          <h4>HIGHEST</h4>
          <div>
            {data.length}
          </div>
          <h4>LOWEST</h4>
          <div>
            {data.length}
          </div>
        </div>
      </div>
    )
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em><br/><img src={logo} className="App-logo" alt="logo" /></p>
      : App.renderCarpark(this.state.data);
    
    return (
      <div className="App">
        <header className="App-header">
          <div>
            Sample WEBAPP for Carpark
          </div>
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
    
  }
}