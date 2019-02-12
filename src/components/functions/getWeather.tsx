export const getWeather = (url: any, zipCode: number, apiKey: any) => {
  fetch(url + zipCode + apiKey)
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
    })
    .catch(err => {
      console.log(err);
    });
};
