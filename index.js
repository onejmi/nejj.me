import React from 'react';
import ReactDOM from 'react-dom';

const getTemplate = () => {
  return (
    <h1>In construction...</h1>
  );
}

//render everything, spout it onto #root div
ReactDOM.render(
  getTemplate(),
  document.getElementById('root')
);