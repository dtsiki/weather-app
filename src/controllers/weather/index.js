import moment from 'moment';

//const API_KEY = process.env.REACT_APP_API_KEY;
const API_KEY = 'b8a3d3bca5282d94f224c4077ba5b4ca';

export const getWeather = async (city) => {
  const options = {
    method: 'get'
  };

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  const request = await fetch(url, options);

  if (request.status === 200) {
    return request.json();
  } else {
    console.log('retur null')
    return null;
  }
};

export const getForecast = async (city, date) => {
  const options = {
    method: 'get'
  };

  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`;
  const request = await fetch(url, options);
  let forecast = [];

  if (request.status === 200) {
    let response = await request.json();

    if (response.list) {
      response.list.map((item) => {
        if (date) {
          if (moment(item.dt_txt).isSame(moment(date), 'day')) {
            forecast.push(item);
          }
        } else {
          if (moment(item.dt_txt).hour() === 12) {
            forecast.push(item);
          }
        }
      });
    }
    return forecast;
  } else {
    return null;
  }
};

