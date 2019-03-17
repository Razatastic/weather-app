import React, { useState, useEffect } from "react";
import Searchbar from "./Searchbar";
import ResultCard from "./ResultCard";
import ParseData from "./ParseData";
import { Grommet } from "grommet";
import "../styles/App.css";

const url = process.env.REACT_APP_OW_API_URL;
const apiKey = process.env.REACT_APP_OW_API_KEY;

const App = () => {
  const [areaZip, setAreaZip] = useState("11230");
  const [weatherObj, setWeatherObj] = useState({});

  // This function is called after React DOM completely renders component - similar to ComponentDidMount()
  useEffect(() => {
    fetch(url + areaZip + apiKey)
      .then(response => {
        return response.json();
      })
      .then(data => {
        const weatherObj = new ParseData(data);
        setWeatherObj(weatherObj);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const updateZipCode = event => {
    setAreaZip(event);
  };

  return (
    <Grommet>
      <div className="vertical-center">
        <Searchbar handleChange={updateZipCode} />
      </div>
      <div className="vertical-center">
        <ResultCard weatherObj={weatherObj} />
      </div>
    </Grommet>
  );
};

export default App;
