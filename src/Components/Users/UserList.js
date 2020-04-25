import React from 'react';
import User from './User';

class UserList extends React.Component{
    render(){
        return(
            <div className="messages-list">
                <ul>
                    {this.props.users.map((user) =>
                        <User 
                        activate_user={this.props.activate_user}
                        user={user} 
                        key={user.id}
                        />
                    )}
                </ul>
            </div>
        )
    }
}

export default UserList