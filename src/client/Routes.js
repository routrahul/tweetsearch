import React from 'react';
import { Switch, Route } from 'react-router';
import Home from './layout/home';
import SingleTweet from './layout/singleTweet';

const Routes = () => (
  <main>
    <Switch>
      <Route exact path="/view/" component={Home} />
      <Route path="/view/viewTweet/:tweetUserId/:tweetId" component={SingleTweet} />
    </Switch>
  </main>
);

export default Routes;
