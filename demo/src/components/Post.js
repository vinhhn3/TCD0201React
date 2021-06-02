import React, { Component } from 'react';
import img from'.././blue-origami-bird.png';
import axios from 'axios'


class Post extends Component {

    state = {
        loading: false,
        error: null,
        data: []
      }
      componentDidMount() {
        this.setState({ loading: true });
    
        axios
          .get('localhost:9999/api/origami/all')
          .then(res => {
            this.setState({ data: res.data, loading: false })
          })
          .catch(err => {
            this.setState({ error: err, loading: false })
          });
      }

    render() {
        const {data} = this.state
        console.log(data)
        return (
            <div className='Post'>
                <img src={img} alt="img" />
                <p className='description'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                </p>
                <div>
                    <span>
                        <small>Author:</small>acas
                    </span>
                </div>
            </div>
        );
    }
}

export default Post;
