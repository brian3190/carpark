import logo from './logo.svg';
import React, { Component } from 'react';
import axios from 'axios';
//import { Route } from 'react-router';
//import { Home } from './components/Home';
//import { Layout } from './components/Layout';
import './App.css';

export default class App extends Component {
  //small_high_avail, small_low_avail, med_high_avail, med_low_avail etc = carpark lots available for highest and lowest
  //small_carpark, medium_carpark etc = array of carpark obtained from filtered data
  //s_highest, s_lowest, m_highest, m_lowest etc = highest available carpark and lowest available carpark
  //lowest, highest = temp value store for lowest and highest value for generic comparison function findHighest and findLowest
  state = {
      data: [],
      loading: true,
      small_high_avail: 50,
      small_low_avail: 20,
      med_high_avail: 0,
      med_low_avail: 0,
      big_high_avail: 0,
      big_low: 0,
      large_high: 0,
      large_low: 0,
      small_carpark: [],
      medium_carpark: [],
      big_carpark: [],
      large_carpark: [],
      s_highest: [],
      s_lowest: [],
      m_highest: [],
      m_lowest: [],
      b_highest: [],
      b_lowest: []
    }    

  //Array initialization
  //let small_carpark = [];

  componentDidMount() {
    axios.get('https://api.data.gov.sg/v1/transport/carpark-availability')
        .then(resp => {
          //console.log(resp);
        this.setState({
          data: resp.data.items[0].carpark_data,
          loading: false
        })
      })
      .catch(console.error);
    setInterval(() => {
      axios.get('https://api.data.gov.sg/v1/transport/carpark-availability')
        .then(resp => {
          //console.log(resp);
        this.setState({
          data: resp.data.items[0].carpark_data,
          loading: false
        })
      })
      .catch(console.error);
    }, 60000);
  }

  // Process data - categorizing carpark into small, medium, big, large
  static processData(data){
    for (let i = 0; i < data.length; i++){
      //can refactor to switch
      if (data[i].carpark_info[0].total_lots < 100){
        this.small_carpark.push(data[i])  
      } else if (100 < data[i].carpark_info[0].total_lots < 300) {
        this.medium_carpark.push(data[i])
      } else if (300 < data[i].carpark_info[0].total_lots < 400) {
        this.big_carpark.push(data[i])
      } else if (data[i].carpark_info[0].total_lots > 400) {
        this.large_carpark.push(data[i])
      };
    }
  }
  
  // Generic Find highest
  static findHighest(carpark, highest, generic_highest) {
    for (let i = 0; i < carpark.length; i++) {
      let num = parseInt(carpark[i].lots_available);
      if (num > highest) {
        highest = num;
        generic_highest = carpark[i];
      }
    }
  }

  // Generic Find lowest
  static findLowest(carpark, lowest, generic_lowest) {
    for (let i = 0; i < carpark.length; i++) {
      let num = parseInt(carpark[i].lots_available);
      if (num < lowest) {
        lowest = num;
        generic_lowest = carpark[i];
      }
    }
  }

  // Render Carpark component into App
  static renderCarpark(state) {
    return (
      <div>
        <div >
          <h2>SMALL</h2>
          <h4>HIGHEST ({state.small_high_avail} lots available)</h4>
          <div>
            Sample test data obtained from API: {state.data.length} 
          </div>
          <h4>LOWEST ({state.small_low_avail} lots available)</h4>
          <div>
            Sample data test obtained from API: {state.data[0].carpark_number}
          </div> 
        </div>
        <div >
          <h2>MEDIUM</h2>
          <h4>HIGHEST ({state.med_high_avail} lots available)</h4>
          <div>
            {state.data[1].carpark_number}
          </div>
          <h4>LOWEST ({state.med_low_avail} lots available)</h4>
          <div>
            {state.data[1].carpark_number}
          </div>
        </div>
        <div>
          <h2>BIG</h2>
          <h4>HIGHEST ({state.data.length} lots available)</h4>
          <div>
            {state.data[2].carpark_number}
          </div>
          <h4>LOWEST ({state.data.length} lots available)</h4>
          <div>
            {state.data[2].carpark_number}
          </div>
        </div>
        <div>
          <h2>LARGE</h2>
          <h4>HIGHEST ({state.data.length} lots available)</h4>
          <div>
            {state.data.length}
          </div>
          <h4>LOWEST ({state.data.length} lots available)</h4>
          <div>
            {state.data.length}
          </div>
        </div>
      </div>
    )
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em><br/><img src={logo} className="App-logo" alt="logo" /></p>
      : App.renderCarpark(this.state);
    
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
  
}