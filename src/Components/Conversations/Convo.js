import React from 'react';

class Convo extends React.Component{
    render(){
        let message = this.props.message
        return(
            <div className={message.is_current_user ? 'convo-box pull-right' : 'convo-box convo-left'}>
                <div className={message.is_current_user ? 'convo-area' : 'convo-area convo-left'}>
                    <div className="convo-message">
                        <p>{message.message.text}</p>
                    </div>
                    <span>{message.sent_on}</span>
                </div>
                <div className="convo-img">
                    <img src={message.user_image_url} className="img-responsive img-circle" />
                </div>
            </div>
        )
    }
}

export default Convo