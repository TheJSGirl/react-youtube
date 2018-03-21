import ReactDOM from 'react-dom';
import React from 'react';
import SearchBar from './components/serachBar';
const API_KEY = 'AIzaSyAAhcjmGBZ0nd2OZAjshL_Q_DxEI5ZauMA';

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('.container'));
