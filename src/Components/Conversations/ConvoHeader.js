import React from 'react';

class ConvoHeader extends React.Component{
    render(){
        if(typeof this.props.active_user.picture_url == 'undefined') {
            const picture_url = `http://localhost:8000/${this.props.active_user.picture_url}`

            return(
                <div className="conversation-header">
                    <div className="user-message-details">
                        <div className="user-message-img">
                            <img src={picture_url} className="img-responsive img-circle" />
                        </div>
                        <div className="user-message-info">
                            <h4>{this.props.active_user.name}</h4>
                            <p>{this.props.active_user.is_online ? 'online': 'offline'}</p>
                        </div>
                    </div>
                    <a href="#" title=""><i className="fa fa-ellipsis-v"></i></a>
                </div>
            )
        } else {
            return (
                <div className="conversation-header">
                    <div className="user-message-details">
                        <div className="user-message-img">
                            <img src="default.png" className="img-responsive img-circle" />
                        </div>
                        <div className="user-message-info">
                            <h4>...</h4>
                            <p>offline</p>
                        </div>
                    </div>
                    <a href="#" title=""><i className="fa fa-ellipsis-v"></i></a>
                </div>
            )
        }
    }
}

export default ConvoHeader