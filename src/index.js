import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import SearchBar from './components/searchBar';
import YTSearch from 'youtube-api-search';
const API_KEY = 'AIzaSyAAhcjmGBZ0nd2OZAjshL_Q_DxEI5ZauMA';

YTSearch({ key: API_KEY, term: 'surfboard' }, data => {
  console.log(data);
});

class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
