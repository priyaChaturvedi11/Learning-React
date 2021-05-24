import React, { Component } from 'react'
import axios from 'axios'

class PostList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             posts: [],
             error: ''
        }
    }
    
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                console.log(response)
                this.setState({
                    posts: response.data
                })
            }).catch(error => {
                console.log(error)
                this.setState({
                    error: "Error occurred while fetching data"
                })
            })
    }

    render() {
       const { posts, error } = this.state
        return (
            <div>
                List of Posts
                {
                    posts.length ? 
                    posts.map(post =>  <div key={post.id}>{post.title}<br/> </div>) :
                    null
                }
            </div>
        )
    }
}

export default PostList
