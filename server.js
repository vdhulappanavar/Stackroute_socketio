const express = require('express')
const http = require('http')
const socketIO = require('socket.io')

// our localhost port
const port = 4001
let player1ShipLocsCoord ={}
let player2ShipLocsCoord = []
function setPlayer1Ships(){
  // console.log("in setPlayer1Ships")
  // console.log(Math.floor(Math.random() * 20))
  // fourShipStartCoord = [Math.floor(Math.random() * 5), Math.floor(Math.random() * 9)]
  // threeShipStartCoord = []
  // for(var i=0;i<2;i++){
  //   temp = [Math.floor(Math.random())*6, Math.floor(Math.random())*10 ]
  //   if(temp[0]==fourShipStartCoord)
  // }
  player1ShipLocsCoord['4'] = [[0,0]]
  player1ShipLocsCoord['3'] = [[2,0],[2,4]]
  player1ShipLocsCoord['2'] = [[4,0],[4,3],[4,6]]
  player1ShipLocsCoord['1'] = [[6,1],[6,3],[6,5],[6,7]]
  return [
    [1,1,1,1,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [1,1,1,0,1,1,1,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [1,1,0,1,1,0,1,1,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,1,0,1,0,1,0,1,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0]
  ];
}
function setPlayer2Ships(){
  // console.log("in setPlayer1Ships")
  // console.log(Math.floor(Math.random() * 20))
  // fourShipStartCoord = [Math.floor(Math.random() * 5), Math.floor(Math.random() * 9)]
  // threeShipStartCoord = []
  // for(var i=0;i<2;i++){
  //   temp = [Math.floor(Math.random())*6, Math.floor(Math.random())*10 ]
  //   if(temp[0]==fourShipStartCoord)
  // }
  return [
    [1,1,1,1,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [1,1,1,0,1,1,1,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [1,1,0,1,1,0,1,1,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,1,0,1,0,1,0,1,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0]
  ];
}
//const player1
const player1ShipLocs = setPlayer1Ships()
const player2ShipLocs = setPlayer2Ships()
const app = express()
app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});
app.get('/api/getPlayer1HitMiss/:i/:j', (req, res) => {
  //res.send({ express: 'Hello From Express' });
  //for(var i=0; i<p)
  console.log("in getPlayer1HitMiss")
  console.log(req.param('i'))
  console.log(req.param('j'))
  const i = req.param('i')
  const j = req.param('j')
  if(player1ShipLocs[i][j]==1){
    res.send({hit:true})
  }
  else{
    res.send({hit:false})
  }
});
// app.listen(4001, () => console.log(`Listening on port 4001`));
// our server instance
const server = http.createServer(app)

// This creates our socket using the instance of the server
const io = socketIO(server)

// This is what the socket.io syntax is like, we will work this later
io.on('connection', socket => {
  console.log('New client connected')
  
  // just like on the client side, we have a socket.on method that takes a callback function
  socket.on('change color', (color) => {
    // once we get a 'change color' event from one of our clients, we will send it to the rest of the clients
    // we make use of the socket.emit method again with the argument given to use from the callback function above
    console.log('Color Changed to: ', color)
    io.sockets.emit('change color', color)
  })

  socket.on('user1BoardChange' , (userBoard)=>{
    io.sockets.emit('user1BoardChange', userBoard)
  })
  
  // disconnect is fired when a client leaves the server
  socket.on('disconnect', () => {
    console.log('user disconnected')
  })
})

server.listen(port, () => console.log(`Listening on port ${port}`))