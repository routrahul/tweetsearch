import React from 'react';
import PropTypes from 'prop-types';
import './tweet.scss';

class Tweet extends React.Component {
  createMarkup(tweetHTML) {
    return { __html: tweetHTML };
  }

  render() {
    const tweetInfo = this.props.tweetInfo;
    return (
      <div
        className="tweet-content"
        dangerouslySetInnerHTML={this.createMarkup(tweetInfo.tweetHTML)} />
    );
  }
}

Tweet.propTypes = {
  tweetInfo: PropTypes.object,
};

export default Tweet;
