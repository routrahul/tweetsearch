import { combineReducers } from 'redux';
import { searchTweetReducer } from './searchTwitterReducer';

export default combineReducers({
  tweetSearch: searchTweetReducer,
});
