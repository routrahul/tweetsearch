import React from 'react';
import './header.scss';

export default class Header extends React.Component {
  render() {
    return (
      <header className="tweet-search-header">
        <h1>
          <img alt="" src="https://pbs.twimg.com/profile_images/875087697177567232/Qfy0kRIP_normal.jpg" />
          <div className="tweet-search-title">Tweet Search </div>
        </h1>
      </header>
    );
  }
}
