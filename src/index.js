import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyB5SMeUMehuumf8ger6TWNg54fz4SR2wAw';

YTSearch({ key: API_KEY, term: 'sufboards' }, function(data) {
  console.log(data)
});

const App = () => {
  return (<div>
            <SearchBar />
          </div>
  );
}

ReactDOM.render(<App />, document.querySelector('.container'));
