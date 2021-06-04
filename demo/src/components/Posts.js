import React, { Component } from 'react';
import axios from 'axios'
import Post from './Post'



class Posts extends Component {

    state = {
        loading: false,
        data: []

      }
      componentDidMount() {
        this.setState({ loading: true });
    
        axios
          .get('http://localhost:9999/api/origami/all')
          .then(res => {
            this.setState({ data: res.data, loading: false })
          })
      }

    render() {
        const {data, loading} = this.state
        console.log(loading)
        if(loading===true){
            return(
                <div>loading</div>
            )
        }else{
            return(
                <div>
                    <h1>adasdsa</h1>
                    <Post data ={data}/>
                </div>
                
            )
        }
        
    }
}

export default Posts;
