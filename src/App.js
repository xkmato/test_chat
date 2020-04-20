import React from 'react';
import './App.css';
import MessageBox from './Components/MessageBox';
import Login from './Components/Login';

class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {isLoggedIn: false, token: ""}
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(data){
    this.setState({isLoggedIn: true, token: data.token})
  }
  
  render(){
    if (this.state.isLoggedIn){
      return (
        <MessageBox token={this.state.token}/>
      )
    }else {
      return (<Login handleLogin={this.handleLogin}/>)
    };
  }
}

export default App;
