import React from 'react';
import User from './User';
import axios from "axios";

class UserList extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            users: [],
        }
    }
    componentDidMount() {
        axios.get("/api/users/", {
            headers: {
                'Authorization': `Token ${this.props.token}`
            }
        }).then(results => {
            if (results.status === 200) {
                this.setState({users: results.data})
            } else {
                console.log(results.data)
                this.setState({users: []})
            }
        }).catch(err => {
            this.setState({users: []})
        })
    }

    render(){
        return(
            <div className="messages-list">
                <ul>
                    {this.state.users.map((user) =>
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