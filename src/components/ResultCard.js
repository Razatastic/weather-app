import React from "react";
import { Box, Heading } from "grommet";

const wrapperStyle = {
  alignItems: "center",
  display: "flex",
  flexDirection: "column"
};

const ResultCard = props => {
  const { weatherObj } = props;
  const { city, humidity, temperature } = weatherObj;
  if (weatherObj !== {}) {
    return (
      <div style={wrapperStyle}>
        <Heading size="medium">{Math.floor(temperature)}°F</Heading>
        <Heading size="small">Humidity: {Math.floor(humidity)}%</Heading>
        <Heading size="medium">{city}</Heading>
      </div>
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
