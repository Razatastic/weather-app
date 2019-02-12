import React, { Component } from "react";
import Searchbar from "./Searchbar";
import ResultCard from "./ResultCard";
import { Grommet } from "grommet";

require("dotenv").config();

const url = "http://api.openweathermap.org/data/2.5/weather?zip=";

const getWeather = (zipCode: any, apiKey: any) => {
  fetch(url + zipCode + ",us&id=524901&APPID=" + apiKey)
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
    })
    .catch(err => {
      // Do something for an error here
    });
};

class App extends Component {
  constructor(props: any) {
    super(props);
    this.state = { areaZip: 11230 };
    this.updateZipcode = this.updateZipcode.bind(this);
  }

  componentDidMount() {
    console.log(process.env);
    const apiKey = process.env.REACT_APP_OW_API_KEY;
    getWeather(11210, apiKey);
  }

  updateZipcode(event: any) {
    this.setState({ areaZip: event });
  }

  render() {
    return (
      <Grommet>
        <Searchbar handleChange={this.updateZipcode} />
        <ResultCard />
      </Grommet>
    );
  }
}

export default App;
