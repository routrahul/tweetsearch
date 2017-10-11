import React from 'react';
import Tweet from '../../../../src/client/components/tweet/tweet';
import tweetInfo from './tweet.data';

describe('Tweet Component tests', function () {

  it('renders without problems', function () {
    const wrapper = render(
      <Tweet tweetInfo={tweetInfo} />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('renders the tweet html', function(){
    const wrapper = render(
      <Tweet tweetInfo={tweetInfo} />
    );

    let content = wrapper.find('#tweet');
    expect(content.length).toBe(1);
  });
});