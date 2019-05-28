import React from 'react';
import TwitterLogin from 'react-twitter-auth/lib/react-twitter-auth-component.js';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import VueAxios from 'vue-axios';
import axios from 'axios';
import { Redirect } from 'react-router';
import { createBrowserHistory } from 'history';
import './signup.css';


export default class SignUp extends React.Component {

	constructor(props) {
		super(props);
		this.state = { isAuthenticated: false, user: null, token:''};

	}

	logout = (response) => {
		console.log("response==============",response);
		this.setState({isAuthenticated: false, token: '', user: null})
		console.log("logout=======",this.state.user);
	};

	onFailure = (error) => {
		alert(error);
	};

	twitterResponse = (response) => {
		console.log("response==============",response);
		const token = response.headers.get('x-auth-token');
		response.json().then(user => {
			if (token) {
				this.setState({isAuthenticated: true, user, token});
				console.log("response========>",this.state.user.email);
			}

			console.log("msg==",this.state.user);
			var apiBaseUrl = "http://localhost:4000/user/login";
			var self = this;
			var payload={
				"email":this.state.user.email,
			}

			axios.post(apiBaseUrl, payload)
			.then(function (response) {
				console.log("login========",response);
				alert("Login successfull")
				console.log("Login successfull");
				// localStorage.setItem('Login', true);
              // this.props.history.push("../home");




          },function(err){
          	console.log(err);

          })
		});

	};

	render() {
		let content = !!this.state.isAuthenticated ?
		(
			<div>
			<p>Authenticated</p>
			<div>
			{this.state.user.email}
			</div>
			<div>
			<button onClick={this.logout} className="button">
			Log out
			</button>
			</div>
			</div>
			) :
			(
			<div>
			<TwitterLogin loginUrl="http://localhost:4000/api/v1/auth/twitter"
			onFailure={this.onFailure} onSuccess={this.twitterResponse}
			requestTokenUrl="http://localhost:4000/api/v1/auth/twitter/reverse"/>
			</div>
			);

			return (
			<div className="signup_bg">
			<Router>
			{content}
			</Router>
			</div>
			);
		}
	}

