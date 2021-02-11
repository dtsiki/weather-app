import React from 'react';

import './style.scss';

const ForecastChart = () => {
  return (
    <div className="forecast-chart">
      <canvas className="forecast-chart__canvas" id="canvas" height="100" />
      <div className="forecast-chart__tooltip" id="tooltip" />
    </div>
  );
};

export default ForecastChart;
