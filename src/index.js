import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
const API_KEY = 'AIzaSyB5SMeUMehuumf8ger6TWNg54fz4SR2wAw';

class App extends Component {
  render() {

    constructor(props) {
      super(props);

      this.state = { videos: [] };

      YTSearch({ key: API_KEY, term: 'surfboards' }, (videos) => {
        this.setState({ videos });  // this.setState({ videos: videos });

      });
    }
  return (
        <div>
          <SearchBar />
        </div>
      );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
