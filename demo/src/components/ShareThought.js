import React, { Component } from 'react';
import axios from 'axios'
import Post from './Post'

class ShareThought extends Component {

  state = {
    data: [],
    description: ''
  }

  componentDidMount() {
    this.setState({ loading: true });

    axios
      .get('http://localhost:9999/api/origami/all', {
        params: {
          limit: 3
        }
      })
      .then(res => {
        this.setState({ data: res.data })
      })
      .catch(err => {
        console.log(err)
      })
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmitData = () => {

    axios
      .post('http://localhost:9999/api/origami',
        {
          description: this.state.description
        },
        {
          withCredentials: true
        }
      )
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })

  }

  render() {
    const { data } = this.state
    return (
      <div className="Input">
        <h1>Share your thought</h1>
        <textarea
          name="description"
          onChange={this.handleChange}
        ></textarea>
        <button
          onClick={this.handleSubmitData}
        >Post</button>
        <h3>Last 3 post</h3>
        <Post data={data} />
      </div>
    );
  }
}

export default ShareThought;
