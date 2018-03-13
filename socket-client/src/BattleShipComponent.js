import React, { Component } from 'react'
import {  CurrentPlayerView } from './CurrentPlayerView'
import { OtherPlayerBattleshipHitMissView } from './OtherPlayerBattleshipHitMissView'
import './BattleShipComponent.css'


export class BattleShipComponent extends Component{
  constructor(props){
    super(props)
    //this.porps.setUser1LogInfo()
    console.log("in Battleship ctor")
    console.log(this.props.match.params.testvalue)
  }
  render(){
    return (
      <div>
          {/* Will Have To sections one for each user */}
          <div className="gameContainer">
            <CurrentPlayerView />
            {/* <OtherPlayerBattleshipHitMissView /> */}
          </div>
      </div>
    )
  }
}