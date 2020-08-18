import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Profile from './profile';
import NAV from './Nav'
import { Route } from 'react-router-dom';
import Auth from './Auth/Auth';
import './index.css';
import Callback from './Callback/Callback';



export class App extends React.Component {
  constructor(props){
    super(props);
    this.auth = new Auth(this.props.history);
  }
  render(){
  return (
    <div className="App">

      <NAV auth={this.auth}{...this.props}/>  
      <Route exact path='/' render={props=><Home auth={this.auth}{...props}/>}></Route>
      <Route exact path='/callback' render={props=><Callback auth={this.auth}{...props}/>}></Route>
      <Route exact path='/profile'  render ={props=><Profile auth={this.auth}{...props}/>}></Route>
    </div>
  );
}
}

export default App;
