import React from 'react';
import Convo from './Convo'
import axios from 'axios';


class Convos extends React.Component{
    constructor(props){
        super(props);

        this.state = {messages: []}
        this.fetch_conversation = this.fetch_conversation.bind(this)
    }

    fetch_conversation(active_user_id){
        console.log(`fetching conversation for user ${active_user_id}`)
        axios.get(`/api/messages/conversations/${active_user_id}/`, {
            headers: {
                'Authorization': `Token ${this.props.token}`
              }
           }).then(results => {
               if (results.status === 200) {
                   console.log(results.data)
                   this.setState({messages: results.data})
               } else {
                   console.log(results.data)
               }
           }).catch(err => {
               console.log(err)
           })
    }

    componentDidMount(){
        this.fetch_conversation(this.props.active_user.id)
     }
    
    static getDerivedStateFromProps(props, state) {
        if(typeof props.active_user.id != 'undefined'){
            return {
                active_user: props.active_user
            }
        }
        return null
    }
    render(){
        return(
            <div className="conversation-container">
                {this.state.messages.map((message) =>
                    <Convo message={message}/>
                )}
            </div> 
        )
    }
}

export default Convos