import React from 'react';

class Search extends React.Component{
    render(){
        return(
            <div className="message-header">
                <div className="message-title">
                    <h4>Messages</h4>
                </div>
                <div className="search-area">
                    <div className="input-field">
                        <input placeholder="Search" type="text"/>
                        <i className="fa fa-search"></i>
                    </div>
                </div>
            </div>
        )
    }
}

export default Search