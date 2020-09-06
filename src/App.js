import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Post from './components/Post/Post';
import PostDetails from './components/PostDetails/PostDetails';
import NoMatch from './components/NoMatch/NoMatch';

function App() {
  return (
    <div className="main-container">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Post />
          </Route>
          <Route path="/posts/:postId">
            <PostDetails />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
