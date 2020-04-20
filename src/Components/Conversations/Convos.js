import React from 'react';
import Convo from './Convo'


class Convos extends React.Component{
    constructor(props){
        super(props);

        this.state = {messages: []}
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