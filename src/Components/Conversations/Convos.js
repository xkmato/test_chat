import React from 'react';
import Convo from './Convo'


class Convos extends React.Component{
    render(){
        return(
            <div className="conversation-container">
                {this.props.active_user.messages.map((message) =>
                    <Convo message={message}/>
                )}
            </div> 
        )
    }
}

export default Convos