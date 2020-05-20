import React from 'react';
import Search from '../Users/Search';
import UserList from '../Users/UserList';
import Convos from './Convos';
import CreateConvo from './CreateConvo';
import ConvoHeader from './ConvoHeader';
import User from "../Users/User";


class ConvoContainer extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            active_user: {},
            search_results: []
        }


        this.activate_user = this.activate_user.bind(this);
        this.search = this.search.bind(this);
    }

    search(search_results) {
        this.setState({
            search_results: search_results
        })
    }

    activate_user(user) {
        this.setState({
            active_user: user
        })
    }

    render(){
        return(
            <div className="messages-box">
                <div className="row">
                    <div className="col-lg-4 col-md-12 no-pdd">
                        <div className="messages-container">
                            <Search search={this.search}/>
                            <div className="messages-list">
                                <ul>
                                    {this.state.users.map((user) =>
                                        <User
                                            activate_user={this.activate_user}
                                            user={user}
                                            key={user.id}
                                        />
                                    )}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-12 pd-right-none pd-left-none">
                        <div className="conversation-box">
                            <ConvoHeader active_user={this.state.active_user}/>
                            <Convos active_user={this.state.active_user} token={this.props.token}/>
                            <CreateConvo active_user={this.state.active_user}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ConvoContainer;