import React, { Component } from "react";
import Searchbar from "./Searchbar";
import ResultCard from "./ResultCard";
import { Grommet } from "grommet";
import { getWeather } from "./functions/getWeather";

class App extends Component {
  constructor(props: any) {
    super(props);
    this.state = { areaZip: 11230 };
    this.updateZipcode = this.updateZipcode.bind(this);
  }

  componentDidMount(this: any) {
    const url = process.env.REACT_APP_OW_API_URL;
    const apiKey = process.env.REACT_APP_OW_API_KEY;
    getWeather(url, this.state.areaZip, apiKey);
  }

  componentDidUpdate(this: any) {
    this.componentDidMount(this);
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
