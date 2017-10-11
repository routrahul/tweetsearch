import React from 'react';
import Header from '../components/header/header';
import TweetSearchResult from '../components/tweetSearchResult/tweetSearchResult';
import SearchBox from '../components/searchPanel/searchPanel';
import './home.scss';

export default class Home extends React.Component {
  render() {
    return (
      <div className="page-align-center">
        <Header />
        <SearchBox />
        <TweetSearchResult />
      </div>
    );
  }
}
