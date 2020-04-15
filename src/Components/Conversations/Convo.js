import React from 'react';

class Convo extends React.Component{
    render(){
        return(
            <div className="convo-box pull-right">
                <div className="convo-area">
                    <div className="convo-message">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum congue leo eget malesuada. Vivamus suscipit tortor eget felis porttitor.</p>
                    </div>
                    <span>Sat, Aug 23, 1:08 PM</span>
                </div>
                <div className="convo-img">
                    <img src="http://themashabrand.com/templates/Fluffs/assets/img/users/2.jpg" class="img-responsive img-circle" />
                </div>
            </div>
        )
    }
}

export default Convo