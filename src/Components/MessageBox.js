import React from 'react';
import axios from 'axios';
import ConvoContainer from './Conversations/ConvoContainer';

class MessageBox extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            users: [],
        }
    }

    componentDidMount(){
       axios.get("/api/users/", {
        headers: {
            'Authorization': `Token ${this.props.token}`
          }
       }).then(results => {
           if (results.status === 200) {
               this.setState({users: results.data})
           } else {
               console.log(results.data)
           }
       }).catch(err => {
           this.setState({users: []})
       })
    }

    render(){
        console.log(this.state.users)
        return(
            <ConvoContainer users={this.state.users} token={this.props.token}/>
        )
    }
}

export default MessageBox