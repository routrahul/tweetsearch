export const searchTweetReducer = (state = [], action) => {
  switch (action.type) {
    case 'SEARCH_TWEET_INPROGRESS':
      return action.info;
    case 'SEARCH_TWEET_SUCCESS':
      return action.info;
    case 'LOAD_MORE_TWEET':
      return state;
    case 'LOAD_MORE_TWEET_INPROGRESS': {
      const newState = JSON.parse(JSON.stringify(state));
      newState.tweetSearchResult.loadMoreTweetsInProgress = true;
      return newState;
    }
    case 'LOAD_MORE_TWEET_SUCCESS': {
      const newState = JSON.parse(JSON.stringify(state));
      const newTweetList = action.info.tweetList;

      newState.tweetSearchResult.loadMoreTweetsInProgress = false;
      newState.tweetSearchResult.currentPage = action.info.currentPage;
      for (let i = 0; i < newTweetList.length; i ++) {
        newState.tweetSearchResult.tweetList.push(newTweetList[i]);
      }
      return newState;
    }
    default:
      return state;
  }
};
