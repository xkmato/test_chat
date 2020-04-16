import React from 'react';
import Search from './Users/Search';
import UserList from './Users/UserList';
import Convos from './Conversations/Convos';
import CreateConvo from './Conversations/CreateConvo';
import ConvoHeader from './Conversations/ConvoHeader';

class MessageBox extends React.Component{
    constructor(props){
        super(props);

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
                            <UserList activate_user={this.activate_user} users={this.state.users}/>
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-12 pd-right-none pd-left-none">
                        <div className="conversation-box">
                            <ConvoHeader active_user={this.state.active_user}/>
                            <Convos active_user={this.state.active_user}/>
                            <CreateConvo active_user={this.state.active_user}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MessageBox