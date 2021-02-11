import React, { useEffect, useState } from 'react';

import { Switch, Route } from 'react-router-dom';
import moment from 'moment';

import Main from './components/pages/Main';
import Day from './components/pages/Day';
import Error from './components/pages/Error';
import { useLocalStorage } from './hooks/useLocalStorage';

import './styles/main.scss';

const FORECAST_LENGTH = 5;

const App = () => {
  const today = moment();

  const initialCity = 'Omsk';

  const [city, setCity] = useLocalStorage('city', initialCity);
	const [formCity, setFormCity] = useState('');

	const handleCity = (e) => {
    console.log(e.target.value)
		setCity(e.target.value)
	};


  const renderDays = () => {
    let days = [];

    for (let d = 0; d < FORECAST_LENGTH; d++) {
      const date = moment(today).set('date', today.get('date') + d);
      const day = date.format('dddd');

      days.push(
        <Route key={day} path={`/${day}`}>
          <Day
            date={date}
            city={city}
            setCity={setCity}
            formCity={formCity}
            setFormCity={setFormCity}
            handleCity={handleCity}
          />
         </Route>
      );
    }

    return days;
  };

  return (
    <Switch>
      {renderDays()}
      <Route exact path="/">
        <Main
          city={city}
          setCity={setCity}
          formCity={formCity}
          setFormCity={setFormCity}
          handleCity={handleCity}
        />
      </Route>
      <Route path="*">
        <Error />
      </Route>
    </Switch>
  );
};

export default App;
