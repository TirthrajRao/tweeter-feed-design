import React from 'react';
import './tweetlist.css';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';

export default class TweetList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      query: '',
      data: [],
      searchString:[],
      value: '',
      results: []
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    console.log("name:",this.state.value);
    event.preventDefault();
    this.getData();
  }

  getData = () => {

    axios.get("http://localhost:4000/search-tweets", {params: {key: this.state.value}})
    .then(({ data }) => {
      this.setState({
        results: data.data
      })
      console.log("result======",data.data);
    })
  }

  filterArray = () => {
    let searchString = this.state.query;
    console.log(searchString);
    let responseData = this.state.data;
    console.log("response",responseData);


    this.getData();

  }

  render() {

    return (
      <div>

      <div className="tweet_class">
      <form onSubmit={this.handleSubmit}>
        <TextField
          id="outlined-with-placeholder"
          label="Add Tweet"
          placeholder="Add Tweet Here"
          margin="normal"
          variant="outlined"
          value={this.state.value} 
          onChange={this.handleChange}
        />
        <br/>
         <Button variant="contained" color="primary">Tweet</Button>
      </form>
      </div>
      </div>

      );
  }
}
