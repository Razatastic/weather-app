import ParseData from "../ParseData";

export default function getWeather(url, zipCode, apiKey) {
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
}
