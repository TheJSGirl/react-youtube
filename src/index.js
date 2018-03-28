import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import SearchBar from './components/searchBar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/videoList';
import VideoDetail from './components/videoDetail';
const API_KEY = 'AIzaSyAAhcjmGBZ0nd2OZAjshL_Q_DxEI5ZauMA';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };
    this.videoSearch('surfboard');
  }

  videoSearch(term) {
    YTSearch({ key: API_KEY, term: 'surfboard' }, data => {
      // console.log(data);
      this.setState({
        videos: data,
        selectedVideo: data[0]
      });
    });
  }

  render() {
    return (
      <div>
        <SearchBar onSearchTermChange={term => this.videoSearch(term)} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          videos={this.state.videos}
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
