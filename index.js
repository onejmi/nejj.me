import React from 'react';
import ReactDOM from 'react-dom';

const getView = () => {
  this.author = "scarger"
  return (
    <div>
      <h1>In construction...</h1>
      <h2>author: {this.author}</h2>
    </div>
  );
}

//render everything, spout it onto #root div
ReactDOM.render(
  getView(),
  document.getElementById('root')
);