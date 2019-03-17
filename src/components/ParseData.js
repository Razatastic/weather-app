class ParseData {
  constructor(data) {
    this.city = data.name;
    this.temperature = data.main.temp;
    this.humidity = data.main.humidity;
    this.conditions = data.weather.main;
    this.conditionsDescription = data.weather.description;
  }
}
export default ParseData;
