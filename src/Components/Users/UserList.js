import React from 'react';
import User from './User';

class UserList extends React.Component{
    render(){
        return(
            <div className="messages-list">
                <ul>
                    <User />
                </ul>
            </div>
        )
    }
}

export default UserList