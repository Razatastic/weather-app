import React, { Component } from "react";
import Searchbar from "./Searchbar";
import ResultCard from "./ResultCard";
import { Grommet } from "grommet";
import getWeather from "./functions/getWeather";

const url = process.env.REACT_APP_OW_API_URL;
const apiKey = process.env.REACT_APP_OW_API_KEY;

class App extends Component {
  constructor(props: any) {
    super(props);
    this.state = { areaZip: "11230" };
    this.updateZipcode = this.updateZipcode.bind(this);
  }

  componentDidMount(this: any) {
    const dataObj = getWeather(url, this.state.areaZip, apiKey);
    this.setState({ dataObj });
  }

  componentDidUpdate(this: any) {
    getWeather(url, this.state.areaZip, apiKey);
  }

  updateZipcode(event: number) {
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
