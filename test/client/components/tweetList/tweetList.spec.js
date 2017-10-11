import React from 'react';
import TweetList from '../../../../src/client/components/tweetList/tweetList';
import {tweetListWithZeroTweet, tweetListWithOneTweet} from './tweetList.data';

describe('TweetList Component tests', function () {
  let tweetListInfo;

  it('renders without problems', function () {
    tweetListInfo = tweetListWithOneTweet;

    const wrapper = shallow(
      <TweetList tweets={tweetListInfo.tweets} searchString={tweetListInfo.searchString} />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('Shows Appropriate function when no result found', function () {
    tweetListInfo = tweetListWithZeroTweet;

    const wrapper = shallow(
      <TweetList tweets={tweetListInfo.tweets} searchString={tweetListInfo.searchString} />
    );

    const noResultDiv = wrapper.find('.no-result-found');
    expect(noResultDiv.length).toBe(1);
  });

  it('Should render tweets', function () {
    tweetListInfo = tweetListWithOneTweet;

    const wrapper = shallow(
      <TweetList tweets={tweetListInfo.tweets} searchString={tweetListInfo.searchString} />
    );

    const noResultDiv = wrapper.find('.no-result-found');
    const tweetDivs = wrapper.find('Tweet');
    expect(noResultDiv.length).toBe(0);
    expect(tweetDivs.length).toBe(1)
  });
});