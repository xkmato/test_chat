import React from 'react';
import axios from 'axios';

class Login extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            username: '', 
            password: '',
            error: false,
        };

        this.setPassword = this.setPassword.bind(this);
        this.setUsername = this.setUsername.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.setError = this.setError.bind(this)
    }

    setPassword(e){
        this.setState({password: e.target.value});
    }

    setUsername(e){
        this.setState({username: e.target.value});
    }

    setError(error){
        this.setState({error: error})
    }

    handleSubmit(e){
        e.preventDefault()
        axios.post("/api/user/login/", {
            username: this.state.username,
            password:this.state.password
        }).then(result => {
            if (result.status === 200){
                this.props.handleLogin(result.data)
            } else {
                this.setError(true)
                console.log(result.data)
            }
        })
    }
    render(){
        return(
            <div className="container">
                <div className="banner-content">
                
                    <h1><i className="fa fa-smile"></i> Fluffs</h1>
                    <form 
                    method="post" 
                    className="form-signin" 
                    onSubmit={this.handleSubmit}
                    >
                        <h3 className="form-signin-heading">Please sign in</h3>
                        <div className="form-group">
                            <input 
                            name="username" 
                            type="text"
                            value={this.state.username}
                            className="form-control" 
                            placeholder="Username"
                            onChange={this.setUsername}
                            />
                        </div>
                        <div className="form-group">
                            <input 
                            type="password" 
                            className="form-control" 
                            name="password" 
                            value={this.state.password}
                            placeholder="Password"
                            onChange={this.setPassword}
                            />
                        </div>
                        <button className="kafe-btn kafe-btn-mint btn-block" type="submit" name="subm">Sign in</button>
                        <br/>
                    </form>
                    
                </div>
            </div>
        )
    }
}

export default Login
