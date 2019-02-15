import React, { Component } from "react";
import Searchbar from "./Searchbar";
import ResultCard from "./ResultCard";
import { Grommet, Grid } from "grommet";
import ParseData from "./ParseData";
import "./styles/App.css";

const url = process.env.REACT_APP_OW_API_URL;
const apiKey = process.env.REACT_APP_OW_API_KEY;

class App extends Component {
  state = { areaZip: "11230", weatherObj: {} };
  updateZipcode = this.updateZipcode.bind(this);
  getWeather = this.getWeather.bind(this);

  componentDidMount = () => {
    this.getWeather();
  };

  getWeather() {
    fetch(url + this.state.areaZip + apiKey)
      .then(response => {
        return response.json();
      })
      .then(data => {
        const weatherObj = new ParseData(data);
        this.setState({ weatherObj });
      })
      .catch(err => {
        console.log(err);
      });
  }

  updateZipcode(event) {
    this.setState({ areaZip: event }, this.getWeather);
  }

  render() {
    return (
      <Grommet className="absolute-center">
        <Grid rows={["small", "large"]} columns={["medium"]} gap="medium">
          <Searchbar handleChange={this.updateZipcode} />
          <ResultCard weatherObj={this.state.weatherObj} />
        </Grid>
      </Grommet>
    );
  }
}

export default App;
