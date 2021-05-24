import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: true
        }
    }
    
    // if else approach
    
    /*
    render() {
        if(this.state.isLoggedIn){
            return (
                <div>
                    <div>Welcome Bella!</div>
                </div>
            )
        }
        return (
            <div>
                <div>Welcome Guest!</div>
            </div>
        )
    }
   */
  
   // element variables approach
    
   /*
   render() {
       let message 
       if(this.state.isLoggedIn){
           message = <div>Welcome Bella!</div>
       } else {
            message = <div>Welcome Guest!</div>
       }

       return <div>{message}</div>
   }
   */

   // ternary conditional approach - can be used within jsx as well
   
   /*
   render() {
       return (
           this.state.isLoggedIn ? 
            <div>
                    <div>Welcome Bella!</div> 
                <button>does Nothing</button>
            </div>           
           :
            <div>            
                <div>Welcome Guest!</div>
                <button>does Nothing</button>
            </div>     
 
           
       )
   }
   */

   // short circuit operator approach -
    // special case  of ternary conditional operator
    // use when you wantt to render something or nothing

   render() {
        // here in, first left hand operand is evaluated
        // if it is true, second operand (which is jsx) is also evaluated
        // and is rendered on screen
        // if first operand evaluates to false nothing is displayed
        return this.state.isLoggedIn && <div>Welcome Bella!</div>
   }
}

export default UserGreeting
