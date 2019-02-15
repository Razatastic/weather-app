export default class ParseData {
  constructor(data) {
    this.location = data.location;
    this.temperature = data.temperature;
    this.humidity = data.humidity;
    this.conditions = data.conditions;
  }
}
