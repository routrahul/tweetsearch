import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'axios';
import * as tweetActions from '../../actions/searchTweetActions';
import './searchPanel.scss';

export class SearchPanel extends React.Component {

  /**
   * Removes all special characters from input string
   * @param searchString
   */
  filter(searchString) {
    return searchString.replace(/[^a-zA-Z ]/, '');
  }

  /**
   * extracts the value from searhc box,
   * filters the value,
   * calls searchTweet
   */
  submit() {
    const searchString = this.refs.searchString.value.trim();
    this.searchTweets(this.filter(searchString));
  }

  /**
   * dispatches 'searchTweetInProgress' action
   * makes an ajax call to get serch result for the search string
    * @param searchString
   */
  searchTweets = (searchString) => {
    const API_URL = '/services/search';
    const URL = API_URL.concat('/').concat(searchString);
    this.props.searchTweetInProgress();

    axios(URL).then((response) => {
      const tweetSearchResult = response.data;
      tweetSearchResult.currentPage = 0;
      tweetSearchResult.searchString = searchString;
      this.props.searchTweetSuccess({
        tweetSearchResult, searchInProgress: false,
      });
    }).catch(error => {
      throw (error);
    });
  };

  /**
   * renders the component
   * @returns {XML}
   */
  render() {
    return (
      <div className="search-panel">
        <input
          type="text"
          id="search-string"
          ref="searchString"
          onKeyUp={e => { if (e.keyCode === 13) this.submit(); }} />
        <button className="search-btn" onClick={() => this.submit()}>Search</button>
      </div>
    );
  }
}

SearchPanel.propTypes = {
  searchTweetInProgress: PropTypes.func.isRequired,
  searchTweetSuccess: PropTypes.func.isRequired,
};

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchTweetSuccess: searchResult => dispatch(tweetActions.searchTweetSuccess(searchResult)),
    searchTweetInProgress: () => dispatch(tweetActions.searchInProgress({
      searchInProgress: 'true',
    })),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(SearchPanel);
