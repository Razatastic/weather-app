import React from "react";
import { Box, Heading } from "grommet";

const ResultCard = props => {
  const { weatherObj } = props;
  const { city, humidity, temperature } = weatherObj;
  if (weatherObj === {}) {
    return (
      <Box direction="row" pad="small" className="box-style">
        <Heading size="large">{Math.floor(temperature)}°F</Heading>
        <Heading size="small">Humidity: {Math.floor(humidity)}%</Heading>
        <Heading size="medium">{city}</Heading>
      </Box>
    );
  } else {
    // When API exceeds call limit
    return (
      <Box direction="row" pad="small" className="box-style">
        <Heading size="large">Please try again at a later time!</Heading>
      </Box>
    );
  }
};

export default ResultCard;
