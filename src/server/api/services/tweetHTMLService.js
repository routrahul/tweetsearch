import request from 'request';
const TWITTER_OMBED_URL = 'https://publish.twitter.com/oembed?url=';


/**
 * Prepares Tweet Url from given tweetId and UserId
 * @param tweetId
 * @param tweetUserId
 * @returns {string}
 */
const prepareTweetUrl = (tweetId, tweetUserId) => 'https://twitter.com/'.concat(tweetUserId).concat('/status/').concat(tweetId);

/**
 * Fetch HTML info for a given tweet
 * @param tweetId
 * @param tweetUserId
 * @returns {Promise}
 */
const getTweetInfo = (tweetUserId, tweetId) => {
  console.log(tweetUserId);
  return new Promise((resolve, reject) => {
    request(TWITTER_OMBED_URL + prepareTweetUrl(tweetId, tweetUserId),
      (error, response, body) => {
        if (!error && response.statusCode === 200) {
          const tweetInfo = {
            tweetId,
            tweetUserId,
            tweetHTML: JSON.parse(body).html,
          };
          resolve(tweetInfo);
        }
        reject(error);
      });
  });
};


/**
 * Fetch HTML info for list of Tweet
 * @param tweetList
 * @returns {Promise}
 */
const getInfoForTweetList = (tweetList) => {
  return new Promise((resolve, reject) => {
    const tweetHTMLPromises = [];
    for (let idx = 0; idx < tweetList.length; idx++) {
      const tweetInfo = tweetList[idx];
      const tweetPromise = getTweetInfo(tweetInfo.tweetUserId, tweetInfo.tweetId);
      tweetHTMLPromises.push(tweetPromise);
    }

    Promise.all(tweetHTMLPromises).then(data => {
      resolve(data);
    }).catch(err => {
      reject(err);
    });
  });
};

export default {
  getTweetInfo,
  getInfoForTweetList,
};
