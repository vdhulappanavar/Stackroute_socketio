import React, { Component } from "react";
import socketIOClient from "socket.io-client";
import { Switch, Route,Link } from 'react-router-dom'
import {  BattleShipComponent } from './BattleShipComponent'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { AppBar, FlatButton } from  'material-ui';
import {HomeComponent} from './HomeComponent'
import {RulesComponent} from './RulesComponent'
import {PlayGameComponent} from './PlayGameComponent'

class App extends Component {  
  render() {
    const rightButtons = (
      <div>
        <FlatButton><Link to='/'>Home</Link></FlatButton>
        <FlatButton><Link to='/Rules'>Rules</Link></FlatButton>
        <FlatButton><Link to='/play'>Play</Link></FlatButton>
      </div>
    );
    return (
      <div style={{ textAlign: "center" }}>
        <div className="App">
        <MuiThemeProvider>
        <AppBar
          title="Title"
          iconElementRight={rightButtons} 
        />
       </MuiThemeProvider>
        
          <main>
            <Switch>
              <Route exact path='/' component={HomeComponent}/>
              <Route exact path='/Rules' component={RulesComponent}/>
              <Route exact path='/user1' component={BattleShipComponent}/>
              <Route exact path='/user2' component={BattleShipComponent}/>
              <Route exact path='/play' component={PlayGameComponent}/>
            </Switch>
          </main>
      </div>

      </div>
    )
  }
}
export default App;