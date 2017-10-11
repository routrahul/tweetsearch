import express from 'express';
import SearchTweetService from './services/tweetSearchService';
import TweetHTMLService from './services/tweetHTMLService';
import bodyParser from 'body-parser';
import cache from './cache';
const routerApi = express.Router;
const router = routerApi();

router.use(bodyParser.json());

/**
 * Handling '/search' url to search tweet based on search string
 * URL params-
 *   searchString: string to search tweets
 **/
router.get('/search/:searchString', cache(300), (req, res) => {
  SearchTweetService.searchTweets(req.params.searchString).then(data => {
    res.send(data);
  }).catch(err => {
    res.send(err);
  });
});


/**
 * Handling '/getHtml' url to to get html for a single tweet
 * fro given userId and tweetId
 */
router.get('/getHtml/:tweetUserId/:tweetId', cache(300), (req, res) => {
  TweetHTMLService.getTweetInfo(req.params.tweetUserId, req.params.tweetId).then(data => {
    res.send(data);
  }).catch(err => {
    res.send(err);
  });
});


/**
 * Handling '/getTweetHTMLList' url to to get html for a list of tweets
 * passed as tweetsForNextPage
 */
router.post('/getTweetHTMLList', (req, res) => {
  TweetHTMLService.getInfoForTweetList(req.body.tweetsForNextPage).then(data => {
    res.send(data);
  });
});

module.exports = router;
