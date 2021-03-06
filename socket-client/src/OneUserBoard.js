import React, { Component } from 'react'
import './OneUserBoard.css'

function Square(props) {
  console.log(props.boxState)
  if(props.boxState == 0){
    return(
      <button className="square ocean" onClick={props.onClick}>
        
      </button>
    )
  }
  else if(props.boxState == -1){
    return(
      <button className="square miss" onClick={props.onClick}>
        
      </button>
    )
  }
  else if(props.boxState == 1){
    return(
      <button className="square hit" onClick={props.onClick}>
        
      </button>
    )
  }
  
}

export class OneUserBoard extends React.Component {
  state = {
    response: ''
  };

  componentDidMount() {
    console.log("in componentdidmount")
    this.callApi()
      .then(res => {console.log(res); this.setState({ response: res.express })})
      .catch(err => console.log(err));
  }

  callApi = async () => {
    console.log("in callApi")
    // const response = await fetch('/api/hello');
    // const body = await response.json();
    // console.log(response.status)
    // console.log(body)
    // if (response.status !== 200) throw Error(body.message);
    // fetch('/api/hello')
    // .then(res => {console.log("in res of fetch"); console.log(res);})
    // return {"express":"something"};
    const response = await fetch('/api/hello');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  callApiHitMiss = async (i, j) => {
    console.log("in callApi")
    
    const response = await fetch(`/api/getPlayer1HitMiss/${i}/${j}`);
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
      setShipLocSate: false
    };
  }

  changeSetShipLocSate = ()=>{
    this.setState({
      setShipLocSate : true
    })
  }

  handleClick(i, j) {
    this.props.changeHitMissArray(i, j) 
    console.log("in componentdidmount")
    this.callApiHitMiss(i, j)
      .then(res => {console.log(res);})
      .catch(err => console.log(err));
    
  }

  renderSquare(i, j) {
    return (
      <Square
        boxState = {this.props.arrayToDrawBoard[i][j]}
        onClick={() => this.handleClick(i, j)}
      />
    );
  }

  setShipLoc = (i, j)=>{
    console.log("in set ship loc")
  }

  render() {
    //const status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    
      // const winner = calculateWinner(this.state.squares);
      // let status;
      // if (winner) {
      //   status = 'Winner: ' + winner;
      // } else {
      //   status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
      // }
  
    // return (
    //   <div>
    //     <div className="status">{status}</div>
    //     <div className="board-row">
    //       {this.renderSquare(0)}
    //       {this.renderSquare(1)}
    //       {this.renderSquare(2)}
    //     </div>
    //     <div className="board-row">
    //       {this.renderSquare(3)}
    //       {this.renderSquare(4)}
    //       {this.renderSquare(5)}
    //     </div>
    //     <div className="board-row">
    //       {this.renderSquare(6)}
    //       {this.renderSquare(7)}
    //       {this.renderSquare(8)}
    //     </div>
    //   </div>
    // );
    // let list = []
    // //for(let i=0;i<this.props.arrayToDrawBoard)
    // this.props.arrayToDrawBoard.forEach(row=>{
    //   list.push( <div className="board-row"> );
    //   row.forEach(element=>{
    //     list.push(this.renderSquare(0))
    //   })
    //   list.push(</div>)
    // })

    let shipLocGrid=''
    if(this.state.setShipLocSate){
      shipLocGrid=`HEY`
    }
    return(
      <div >
        {this.state.response}
        <div className="gameContainer">
        <div>
          {/* {list}       */}
          <div className="board-row">
            {this.renderSquare(0, 0)}
            {this.renderSquare(0, 1)}
            {this.renderSquare(0, 2)}
            {this.renderSquare(0, 3)}
            {this.renderSquare(0, 4)}
            {this.renderSquare(0, 5)}
            {this.renderSquare(0, 6)}
            {this.renderSquare(0, 7)}
            {this.renderSquare(0, 8)}
            {this.renderSquare(0, 9)}
          </div>
          <div className="board-row">
            {this.renderSquare(1, 0)}
            {this.renderSquare(1, 1)}
            {this.renderSquare(1, 2)}
            {this.renderSquare(1, 3)}
            {this.renderSquare(1, 4)}
            {this.renderSquare(1, 5)}
            {this.renderSquare(1, 6)}
            {this.renderSquare(1, 7)}
            {this.renderSquare(1, 8)}
            {this.renderSquare(1, 9)}
          </div>
          <div className="board-row">
            {this.renderSquare(2, 0)}
            {this.renderSquare(2, 1)}
            {this.renderSquare(2, 2)}
            {this.renderSquare(2, 3)}
            {this.renderSquare(2, 4)}
            {this.renderSquare(2, 5)}
            {this.renderSquare(2, 6)}
            {this.renderSquare(2, 7)}
            {this.renderSquare(2, 8)}
            {this.renderSquare(2, 9)}
          </div>
          <div className="board-row">
            {this.renderSquare(3, 0)}
            {this.renderSquare(3, 1)}
            {this.renderSquare(3, 2)}
            {this.renderSquare(3, 3)}
            {this.renderSquare(3, 4)}
            {this.renderSquare(3, 5)}
            {this.renderSquare(3, 6)}
            {this.renderSquare(3, 7)}
            {this.renderSquare(3, 8)}
            {this.renderSquare(3, 9)}
          </div>
          <div className="board-row">
            {this.renderSquare(4, 0)}
            {this.renderSquare(4, 1)}
            {this.renderSquare(4, 2)}
            {this.renderSquare(4, 3)}
            {this.renderSquare(4, 4)}
            {this.renderSquare(4, 5)}
            {this.renderSquare(4, 6)}
            {this.renderSquare(4, 7)}
            {this.renderSquare(4, 8)}
            {this.renderSquare(4, 9)}
          </div>
          <div className="board-row">
            {this.renderSquare(5, 0)}
            {this.renderSquare(5, 1)}
            {this.renderSquare(5, 2)}
            {this.renderSquare(5, 3)}
            {this.renderSquare(5, 4)}
            {this.renderSquare(5, 5)}
            {this.renderSquare(5, 6)}
            {this.renderSquare(5, 7)}
            {this.renderSquare(5, 8)}
            {this.renderSquare(5, 9)}
          </div>
          <div className="board-row">
            {this.renderSquare(6, 0)}
            {this.renderSquare(6, 1)}
            {this.renderSquare(6, 2)}
            {this.renderSquare(6, 3)}
            {this.renderSquare(6, 4)}
            {this.renderSquare(6, 5)}
            {this.renderSquare(6, 6)}
            {this.renderSquare(6, 7)}
            {this.renderSquare(6, 8)}
            {this.renderSquare(6, 9)}
          </div>
          <div className="board-row">
            {this.renderSquare(7, 0)}
            {this.renderSquare(7, 1)}
            {this.renderSquare(7, 2)}
            {this.renderSquare(7, 3)}
            {this.renderSquare(7, 4)}
            {this.renderSquare(7, 5)}
            {this.renderSquare(7, 6)}
            {this.renderSquare(7, 7)}
            {this.renderSquare(7, 8)}
            {this.renderSquare(7, 9)}
          </div>
          <div className="board-row">
            {this.renderSquare(8, 0)}
            {this.renderSquare(8, 1)}
            {this.renderSquare(8, 2)}
            {this.renderSquare(8, 3)}
            {this.renderSquare(8, 4)}
            {this.renderSquare(8, 5)}
            {this.renderSquare(8, 6)}
            {this.renderSquare(8, 7)}
            {this.renderSquare(8, 8)}
            {this.renderSquare(8, 9)}
          </div>
          <div className="board-row">
            {this.renderSquare(9, 0)}
            {this.renderSquare(9, 1)}
            {this.renderSquare(9, 2)}
            {this.renderSquare(9, 3)}
            {this.renderSquare(9, 4)}
            {this.renderSquare(9, 5)}
            {this.renderSquare(9, 6)}
            {this.renderSquare(9, 7)}
            {this.renderSquare(9, 8)}
            {this.renderSquare(9, 9)}
          </div>
        </div>
        </div>
        <button onClick = {this.changeSetShipLocSate}> Set My own Positions</button>
        {shipLocGrid}
        </div>

    )
  }
}



// export class OneUserBoard extends Component{
//   render(){
//     return(
//       <div>
//         Conatins Board

//       </div>
//     )
//   }
// }