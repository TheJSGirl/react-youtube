import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import SearchBar from './components/searchBar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/videoList';
const API_KEY = 'AIzaSyAAhcjmGBZ0nd2OZAjshL_Q_DxEI5ZauMA';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: []
    };

    YTSearch({ key: API_KEY, term: 'surfboard' }, data => {
      // console.log(data);
      this.setState({ videos: data });
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
