import ParseData from "../ParseData";

const url = process.env.REACT_APP_OW_API_URL;
const apiKey = process.env.REACT_APP_OW_API_KEY;

export default function getWeather(zipCode) {
  fetch(url + zipCode + apiKey)
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
