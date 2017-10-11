import tweetInfo from '../tweet/tweet.data';

const tweetListWithZeroTweet = {
    searchString: "test", tweets: [ ],
};

const tweetListWithOneTweet ={
  searchString: "test", tweets: [ tweetInfo ],
};

export {
  tweetListWithZeroTweet,
  tweetListWithOneTweet
};