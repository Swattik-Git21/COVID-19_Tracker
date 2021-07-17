import React from 'react';
import {Cards, Chart, CountryPicker} from './components';
import styles from './App.module.css';
import {fetchData} from './api';
import coronaImage from './images/image.png';

class App extends React.Component{
  state = {
    data:{},
    country: '',
  }

  async componentDidMount(){
    const fetchedData = await fetchData();
    this.setState({data:fetchedData});
  }

  // event handler...
  handleCountryChange = async(country)=> {
    const fetchedData = await fetchData(country);
    this.setState({data: fetchedData , country: country});

  }
  render(){
    const {data, country} = this.state;
    return(
      <div className= {styles.container}>
      <Cards data = {data}/>
      <Chart data = {data} country={country} />
      <CountryPicker handleCountryChange ={this.handleCountryChange}/>
      <img className={styles.image} src={coronaImage} alt="COVID-19"/>
      </div>
    )
  }
}

export default App;