import React from 'react';

class CreateConvo extends React.Component{
    render(){
        return(
            <div className="type_messages">
                <div className="input-field">
                    <textarea placeholder="Type something &amp; press enter"></textarea>
                    <ul className="imoji">
                        <li><a href="#"><i className="fa fa-smile"></i></a></li>
                        <li><a href="#"><i className="fa fa-image"></i></a></li>
                        <li><a href="#"><i className="fa fa-paperclip"></i></a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default CreateConvo