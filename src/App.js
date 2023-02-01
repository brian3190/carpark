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
    this.state = {
      data: [], loading: true, small_high: 50, small_low: 0, med_high: 0, med_low: 0, big_high: 0, big_low: 0, large_high: 0, large_low: 0,
      small_carpark: [], medium_carpark: [], big_carpark: [], large_carpark: [], s_highest: [], s_lowest: [], m_highest: [], m_lowest: [], b_highest: [], b_lowest: []
    }
  };

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

  static renderCarpark(data, small_high, small_low, med_high, med_low, big_high, big_low, large_high, large_low,
      small_carpark, medium_carpark, big_carpark, large_carpark, s_highest, s_lowest, m_highest, m_lowest, b_highest, b_lowest) {
    return (
      <div>
        <div >
          <h2>SMALL</h2>
          <h4>HIGHEST ({small_high} lots available)</h4>
          <div>
            {data.length}
          </div>
          <h4>LOWEST ({small_low} lots available)</h4>
          <div>
            {data[0].carpark_number}
          </div> 
        </div>
        <div >
          <h2>MEDIUM</h2>
          <h4>HIGHEST ({data.length} lots available)</h4>
          <div>
            {data.length}
          </div>
          <h4>LOWEST ({data.length} lots available)</h4>
          <div>
            {data.length}
          </div>
        </div>
        <div>
          <h2>BIG</h2>
          <h4>HIGHEST ({data.length} lots available)</h4>
          <div>
            {data.length}
          </div>
          <h4>LOWEST ({data.length} lots available)</h4>
          <div>
            {data.length}
          </div>
        </div>
        <div>
          <h2>LARGE</h2>
          <h4>HIGHEST ({data.length} lots available)</h4>
          <div>
            {data.length}
          </div>
          <h4>LOWEST ({data.length} lots available)</h4>
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