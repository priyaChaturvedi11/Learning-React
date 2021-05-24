import React, { Component } from 'react'

export class Form extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            username: '',
            comments: '',
            topic: 'react'        
        }

    }
    

    // method as a class property
    // property is an arrow function
    // when you assign handler to onChange 
    // event itself is passed as a parameter to arrow function
    changeUsernameHandler = (event) => {
        console.log(event.target.value)
        this.setState({
            username: event.target.value
        })
    }

    handleCommentChange = (event) => {
        this.setState({
            comments: event.target.value
        })
    }

    handleTopicChange = event => {
        this.setState({
            topic: event.target.value
        })
    }

    handleSubmit = event => {
        alert(
            `${this.state.username} 
            has said ${this.state.comments} 
            about the topic ${this.state.topic}`
        )
        // will prevent from page getting refreshed
        // and will prevent loss of filled in data
        event.preventDefault()
    }

    render() {
        const { username , comments , topic } = this.state
        return (
            <form onSubmit={this.handleSubmit}>
                <div >
                    Form Component
                    <br/>
                    <label htmlFor="">Username</label>
                    <input 
                        type="text" 
                        value={username} 
                        onChange={this.changeUsernameHandler}
                    />
                </div>
                <div>
                    <label htmlFor="">Comments</label>
                    <textarea 
                        value={comments}
                        onChange={this.handleCommentChange}
                    >
                    </textarea>
                </div>
                <div>
                    <label htmlFor="">Topic</label>
                    <select
                        value={topic}
                        onChange={this.handleTopicChange}
                    >
                        <option value="react">React</option>
                        <option value="angular">Angular</option>
                        <option value="vue">Vuue</option>
                    </select>
                </div>
                 
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default Form
