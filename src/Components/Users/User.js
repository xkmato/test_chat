import React from 'react';

class User extends React.Component{
    render(){
        return(
            <li className="active">
                <div className="user-message-details">
                    <div className="user-message-img">
                        <img src="http://themashabrand.com/templates/Fluffs/assets/img/users/6.jpg" class="img-responsive img-circle" />
                        <span className="user-online"></span>
                    </div>
                    <div className="user-message-info">
                        <h4>Anthony McCartney</h4>
                        <p>Lorem ipsum dolor ...</p>
                        <span className="time-posted">1:55 PM</span>
                    </div>
                    <span className="message-notification">1</span>
                </div>
            </li>
        )
    }
}

export default User