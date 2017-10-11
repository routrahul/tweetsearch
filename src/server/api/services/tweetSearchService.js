import Twit from 'twit';
import TWEET_API_CONFIG from '../config/tweet-api-config';
import tweetHTMLService from './tweetHTMLService';

const T = new Twit(TWEET_API_CONFIG);

/**
 *  Translates dor filter out only the require data from the search tweet response
 * @param data
 * @returns {Array}
 */
const filterRequiredTweetInfo = (data) => {
  const tweets = data.statuses;
  const totalTweets = [];

  for (let idx = 0; idx < tweets.length; idx ++) {
    const tweetInfo = {};
    tweetInfo.tweetId = tweets[idx].id_str;
    tweetInfo.tweetUserId = tweets[idx].user.screen_name;
    totalTweets.push(tweetInfo);
  }
  return totalTweets;
};

/**
 * Get List of tweets information for the given search String
 * @returns {Promise}
 */
const getTweetsInformationFromTwitter = (searchStr) => {
  return new Promise((resolve, reject) => {
    T.get('search/tweets', { q: searchStr, count: 100 }, (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
};


/**
 * Search for the given Search String
 * @param searchStr
 * @returns {Promise}
 */
const searchTweets = (searchStr) => {
  return new Promise((resolve, reject) => {
    getTweetsInformationFromTwitter(searchStr).then(data => {
      const totalTweets = filterRequiredTweetInfo(data);
      const firstFoldTweets = totalTweets.slice(0, 10);

      tweetHTMLService.getInfoForTweetList(firstFoldTweets).then(tweetHTMLInfoList => {
        const tweetSearchResult = {};
        const tweetList = [];

        if (tweetHTMLInfoList.length) {
          for (let i = 0; i < tweetHTMLInfoList.length; i++) {
            tweetList.push(tweetHTMLInfoList[i]);
          }
        }

        tweetSearchResult.totalTweets = totalTweets;
        tweetSearchResult.tweetList = tweetList;
        resolve(tweetSearchResult);
      }).catch(err => {
        reject(err);
      });
    });
  });
};

export default { searchTweets };
