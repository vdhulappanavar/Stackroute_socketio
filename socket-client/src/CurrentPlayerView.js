import React, {  Component }  from 'react'
import { OneUserBoard } from './OneUserBoard'
import socketIOClient from "socket.io-client";

const socketUrl = "http://172.23.238.192:4001"
export class CurrentPlayerView extends Component{
  constructor(props){
    super(props)
    this.changeHitMissArray = this.changeHitMissArray.bind(this)
    // let minPos = 0;
    // let maxPos = 8;

    let myBattleshipBoardState = []//Array(8).fill(Array(8).fill(0))
    let oldArray = []
    for(let i=0;i<10;i++){
      //myBattleshipBoardState.push([])
      let temp = [];
      for(let j=0; j<10;j++){
        temp.push(0)
      }
      myBattleshipBoardState.push(temp)
      oldArray.push(temp.slice())
    }
    //console.log(myBattleshipBoardState)
    //let oldArray = myBattleshipBoardState.slice()
    //console.log("oldArray")
    //console.log(oldArray)
    //let locationOfFour = 

    //Hard code positions of the ships for now
    // let posFourShipStart=[4, [0,0]]
    // let posThreeShipStart = [3, [2,0],[2,4]]
    // let posTwoShipStart = [2, [4,0],[4,3],[4,6]]
    // let posOneShipStart = [1, [6,0],[6,2],[6,4],[6,6]]

    let shipPositons = {
      4: [[0,0]],
      3: [[2,0],[2,4]],
      2: [[4,0],[4,3],[4,6]],
      1: [[6,0],[6,2],[6,4],[6,6]]
  }
  // //console.log(myBattleshipBoardState)
  Object.keys(shipPositons).forEach(shipLength=>{
    //console.log(shipLength)
    shipPositons[shipLength].forEach(shipPos =>{
      //console.log(shipPos)
      for(let i=0;i<shipLength;i++){
        //console.log("ship len : " + shipLength)
        //myBattleshipBoardState[1][1] = 1
        myBattleshipBoardState[shipPos[0]][shipPos[1]+i] = 1
        //console.log(myBattleshipBoardState)
      }
    })
  })

  //console.log(myBattleshipBoardState)
    // myBattleshipBoardState.forEach(row => {
    //   row.forEach(cell =>{

    //   })
    // })
    //console.log(myBattleshipBoardState)
    //console.log(Math.random())
    this.state={
      originalBatlleShipState : myBattleshipBoardState,
      hitMissArray  : oldArray,
      socket : null,
      //endpoint: "http://172.23.238.192:4001"
      //zendpoint : "http://192.168.0.170:4001"
    }
    //this.props.myBattleshipBoardState = myBattleshipBoardState;
  }
   send = () => {
    //const socket = socketIOClient(this.state.endpoint);
    this.state.socket.emit('user1BoardChange', this.state.hitMissArray) // change 'red' to this.state.color
  }
  componentWillMount(){
    this.initSocket()
    const socket = socketIOClient(this.state.endpoint);
    socket.on('user1BoardChange', (userBoard) => {
      //document.body.style.backgroundColor = col
      this.setState({
        hitMissArray : userBoard
      })
    })
  }

  initSocket = ()=>{
    const socket = socketIOClient(socketUrl)
    socket.on('connect' , ()=>{
      console.log("connected")
    })
    this.setState({socket})
  }

  changeHitMissArray(i, j, hitmiss){
    // if(this.state.originalBatlleShipState[i][j] ==1){
    //   console.log("ship there")
    //   //let temp = this.state.changeHitMissArray
    //   this.state.hitMissArray[i][j] = 1
    // }
    // else{
    //   this.state.hitMissArray[i][j] = -1 
    // }
    if(hitmiss){
      this.state.hitMissArray[i][j] = 1
    }
    else{
      this.state.hitMissArray[i][j] = -1 
    }

    this.forceUpdate()
    this.send()
  }


  render(){
    
    return(
    <div>
        {/* <p>Will showcase our ship loactions</p> */}
        <OneUserBoard changeHitMissArray= {this.changeHitMissArray} shipLocs = {this.state.originalBatlleShipState} arrayToDrawBoard={this.state.hitMissArray}/>
        {/* <p>and other users hit and miss count</p>
        <p>Generate ship positions</p> */}
    </div>
    )
  } 
}