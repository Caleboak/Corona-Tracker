import React from 'react';
import CountryPicker from './component/CountryPicker/CountryPicker';
import Cards from './component/Cards/Cards'
import Chart from './component/Chart/Chart'
import {fetchData} from './api/';
import styles from './App.module.css'
import image from './images/image.png'

class App extends React.Component {
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  }

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <image className={styles.image} src={image} alt="corona Image"/>
       
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} /> 
      </div>
    );
  }
}

export default App;
