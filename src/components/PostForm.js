import React, { Component } from 'react'
import axios from 'axios'

class PostForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
         userid: '',
         password: '',
         contact: ''    
        }
    }

    onChangeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitHandler = (e) => {
        //to prevent page refresh
        e.preventDefault()
        console.log(this.state)
    }

    componentDidMount(){
        axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
            .then(response => {
                console.log(response.data)
            }).catch(error => {
                console.log(error)
            })
    }
     
    render() {
        const { userid, password, contact } = this.state
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <input type="text" name="userid" value={userid} onChange={this.onChangeHandler}/>
                    <input type="password" name="password" value={password} onChange={this.onChangeHandler}/>
                    <input type="text" name="contact" value={contact} onChange={this.onChangeHandler}/>
                    <button type="submit">Submit</button>
                </form>
                
            </div>
        )
    }
}

export default PostForm
