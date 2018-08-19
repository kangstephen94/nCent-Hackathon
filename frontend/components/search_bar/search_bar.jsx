import React from 'react';
import merge from 'lodash/merge';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
    };

  }

  render() {
    return (
        <div className="artist-search-bar">
          <input type="text" id="artist-search"></input>
        </div>
    );
  }
};

export default SearchBar;
