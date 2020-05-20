import React from 'react';
import ConvoContainer from './Conversations/ConvoContainer';

class MessageBox extends React.Component{
    render(){
        return(
            <ConvoContainer token={this.props.token}/>
        )
    }
}

export default MessageBox