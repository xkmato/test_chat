import React from 'react';
import Search from '../Users/Search';
import UserList from '../Users/UserList';
import Convos from './Convos';
import CreateConvo from './CreateConvo';
import ConvoHeader from './ConvoHeader';


class ConvoContainer extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            active_user: {
                comrade_id: "6d15d35f-ad98-4224-bce1-6ea3187bb0a2",
                phone: "+256701234568",
                is_online: false,
                picture_url: "profile_pics/Big_Conversations.png",
                id: 2
            }
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
        let active_user;
        if(this.state.active_user == null || this.props.users.length > 0){
            active_user = this.props.users[0]
        } else {
            active_user = this.state.active_user
        }
        return(
            <div className="messages-box">
                <div className="row">
                    <div className="col-lg-4 col-md-12 no-pdd">
                        <div className="messages-container">
                            <Search search={this.search}/>
                            <UserList activate_user={this.activate_user} users={this.props.users}/>
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-12 pd-right-none pd-left-none">
                        <div className="conversation-box">
                            <ConvoHeader active_user={active_user}/>
                            <Convos active_user={active_user} token={this.props.token}/>
                            <CreateConvo active_user={active_user}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ConvoContainer;