import React from 'react';

class User extends React.Component{
    render(){
        return(
            <li className={this.props.user.is_active ? 'active' : null}>
                <div className="user-message-details">
                    <div className="user-message-img">
                        <img src={this.props.user.image_url} className="img-responsive img-circle" />
                        <span className={this.props.user.is_online ? 'user-online' : null}></span>
                    </div>
                    <div className="user-message-info">
                        <h4>{this.props.user.name}</h4>
                        <p>{this.props.user.status_messages}</p>
                    </div>
                    <span className="message-notification">{this.props.user.unread_messages}</span>
                </div>
            </li>
        )
    }
}

export default User