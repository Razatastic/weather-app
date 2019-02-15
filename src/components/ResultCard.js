import React, { Component } from "react";
import "./styles/Card.css";
import { Box, Heading } from "grommet";

class ResultCard extends Component {
  render() {
    const { weatherObj } = this.props;
    const { city, humidity, temperature } = weatherObj;

    return (
      <Box
        direction="row"
        border={{ color: "brand", size: "large" }}
        pad="medium"
        style={{ backgroundColor: "white" }}
        className="center-stuff"
      >
        <Heading size="large">{Math.floor(temperature)}°F</Heading>
        <Heading size="small">Humidity: {Math.floor(humidity)}%</Heading>
        <Heading size="medium">{city}</Heading>
      </Box>
    );
  }
}

export default ResultCard;
