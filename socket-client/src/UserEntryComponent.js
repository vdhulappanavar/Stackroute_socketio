import React,{ Component } from 'react';
import { Link, Route, Redirect,BrowserRouter, withRouter } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { TextField, RaisedButton } from  'material-ui';
import {PropTypes} from "prop-types";
//import {browserHistory} from 'react-router';
export class UserEntryComponent extends Component{
  // static contextTypes = {
  //   router: PropTypes.func.isRequired
  // };
  static contextTypes = {
    router: PropTypes.object
  }
  constructor(props){
    super(props)
    this.state={
      user1LogInfo: false,
      user2LogInfo: false
    }
    
    
  }

  setUser1LogInfo = ()=> {
    console.log("in setUser1LogInfo")
    this.setState({user1LogInfo: true})
    //browserHistory.replace("/user1")
    //this.context.transitionTo.transitionTo('/user1')
    // this.context.router.push('/user1');
    //this.context.location.transitionTo('user1')
    //return <Redirect to="/users" />
    //browserHistory.push('/user1');
    //this.props.history.push("/user1");
    this.context.router.history.push("/user1");
  }
  setUser2LogInfo = ()=> this.setState({user2LogInfo: true})
  

    
  render(){
    const user1TextField=(
      <div>
      <MuiThemeProvider>
        <TextField
          hintText="Gamer1 Name"
          floatingLabelText="Gamer1 Name"
          floatingLabelFixed={true}
        />
        </MuiThemeProvider>
        <MuiThemeProvider>
        <RaisedButton onClick={this.setUser1LogInfo} secondary={true}>
          GO!
        </RaisedButton>
        </MuiThemeProvider>
        </div>
    )
    const user2TextField=(
      <div>
      <MuiThemeProvider>
        <TextField
          hintText="Gamer2 Name"
          floatingLabelText="Gamer2 Name"
          floatingLabelFixed={true}
        />
        </MuiThemeProvider>
        <MuiThemeProvider>
        <RaisedButton label="Go!" onClick={this.setUser1Name} secondary={true} />
        </MuiThemeProvider>
        </div>
    )
    if(this.props.user1LogInfo){
      console.log("diable user1")
    }
    return(
      <div>
        <div className="use">
          {user1TextField}
          {user2TextField}
        </div>
        
        {/* <BattleShipComponent/> */}
      </div>
    )
  }
}