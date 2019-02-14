import ParseData from "./ParseData";

const getWeather = (url: any, zipCode: number, apiKey: any) => {
  fetch(url + zipCode + apiKey)
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
      return new ParseData(data);
    })
    .catch(err => {
      console.log(err);
    });
};

export default getWeather;
