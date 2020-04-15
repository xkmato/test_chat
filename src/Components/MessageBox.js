import React from 'react';
import Search from './Users/Search';
import UserList from './Users/UserList';
import Convos from './Conversations/Convos';
import CreateConvo from './Conversations/CreateConvo';
import ConvoHeader from './Conversations/ConvoHeader';

class MessageBox extends React.Component{
    render(){
        return(
            <div className="messages-box">
                <div className="row">
                    <div className="col-lg-4 col-md-12 no-pdd">
                        <div className="messages-container">
                            <Search />
                            <UserList />
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-12 pd-right-none pd-left-none">
                        <div className="conversation-box">
                            <ConvoHeader />
                            <Convos />
                            <CreateConvo />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MessageBox