import React from 'react';

class ConvoHeader extends React.Component{
    render(){
        return(
            <div className="conversation-header">
                <div className="user-message-details">
                    <div className="user-message-img">
                        <img src="http://themashabrand.com/templates/Fluffs/assets/img/users/6.jpg" className="img-responsive img-circle" />
                    </div>
                    <div className="user-message-info">
                        <h4>John Doe</h4>
                        <p>Online</p>
                    </div>
                </div>
                <a href="#" title=""><i className="fa fa-ellipsis-v"></i></a>
            </div>
        )
    }
}

export default ConvoHeader