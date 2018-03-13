import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { TextField, RaisedButton } from  'material-ui';
// import {  BattleShipComponent } from './BattleShipComponent'
import {UserEntryComponent} from './UserEntryComponent'
export class PlayGameComponent extends Component{
  
  
  render(){return(
      <div>
          <UserEntryComponent />
        {/* <button><Link to='/user1'>USER1</Link></button>
        <MuiThemeProvider>
        <TextField
          hintText="Hint Text"
          floatingLabelText="Fixed Floating Label Text"
          floatingLabelFixed={true}
        />
        </MuiThemeProvider>
        <MuiThemeProvider>
        <RaisedButton label="Go!" onClick={this.setUser1Name} primary={true} />
        </MuiThemeProvider> */}
        {/* <BattleShipComponent/> */}
      </div>
    )
  }
}