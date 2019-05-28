import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import SignUp from './signup/signup.js';
import Home from './home/home.js';
import TweetList from './tweetlist/TweetList.js';

import './App.css';

class App extends React.Component {
	render() {
		return (
			<Router>
			<div>
			
			</div>
			<Route  path="/signup" component={SignUp} />
			<Route  path="/home" component={Home} />
			<Route path="/tweetlist" component={TweetList} />

			</Router>
			);
	}
}

export default App;
