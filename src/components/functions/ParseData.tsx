class ParseData {
  location: any;
  temperature: any;
  humidity: any;
  conditions: any;
  constructor(data: any) {
    this.location = data.location;
    this.temperature = data.temperature;
    this.humidity = data.humidity;
    this.conditions = data.conditions;
  }
}
export default ParseData;
