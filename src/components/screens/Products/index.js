import './style.css';
import React from 'react';

function Circle(props) {
  return (
    <button className="circle" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Board extends React.Component(){
  constructor(pros){
    super(pros)
    this.state ={board}
  }
  renderCircle(i) {
    return (
      <circle
        value={this.props.circle[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }
  render(){
    var col = null;
    var row = null;
    
    var board = [
      [null, null, null, null, null, null],
      [null, null, null, null, null, null],
      [null, null, null, null, null, null],
      [null, null, null, red, null, null],
      [null, null, null, null, null, null],
      [null, null, null, null, null, null],
      [null, null, null, null, null, null]
    ]
    
    return(
      <div className="checkGameStatus">
        
        {this.state.board[col, row] === board[col, row + 1]}
        {this.state.board[col, row] === board[col, row + 2]}
        {this.state.board[col, row] === board[col, row + 3]}
        {this.state.board[col, row] === board[col, row - 1]}
        {this.state.board[col, row] === board[col, row - 2]}
        {this.state.board[col, row] === board[col, row - 3]}

        {this.state.board[col, row] === board[col + 1, row]}
        {this.state.board[col, row] === board[col + 2, row]}
        {this.state.board[col, row] === board[col + 3, row]}
        {this.state.board[col, row] === board[col - 1, row]}
        {this.state.board[col, row] === board[col - 2, row]}
        {this.state.board[col, row] === board[col - 3, row]}

        {this.state.board[col, row] === board[col + 1, row + 1]}
        {this.state.board[col, row] === board[col + 2, row + 1]}
        {this.state.board[col, row] === board[col + 3, row + 1]}
        {this.state.board[col, row] === board[col - 1, row - 1]}
        {this.state.board[col, row] === board[col - 2, row - 1]}
        {this.state.board[col, row] === board[col - 3, row - 1]}

        {this.state.board[col, row] === board[col + 1, row + 1]}
        {this.state.board[col, row] === board[col + 2, row + 1]}
        {this.state.board[col, row] === board[col + 3, row + 1]}
        {this.state.board[col, row] === board[col - 1, row - 1]}
        {this.state.board[col, row] === board[col - 2, row - 1]}
        {this.state.board[col, row] === board[col - 3, row - 1]}

        {this.state.board[col, row] === board[col + 1, row - 1]}
        {this.state.board[col, row] === board[col + 2, row - 1]}
        {this.state.board[col, row] === board[col + 3, row - 1]}
        {this.state.board[col, row] === board[col - 1, row + 1]}
        {this.state.board[col, row] === board[col - 2, row + 1]}
        {this.state.board[col, row] === board[col - 3, row + 1]}
      </div>
    );
  }
}
var turn = 'yellow';
var toggleTurn = function () {
  turn = (turn === 'yellow') ? 'red' : 'yellow'
}

var columnEventHandler = function (evt) {
  var columnId = evt.target.id.substr(1, 1)
  for (var i = 0; i < board[columnId].length; i++) {
    if (!board[columnId][i]) {
      board[columnId][i] = turn
      checkGameStatus(columnId, i)
      toggleTurn()
      render()
      break;
    }
  };
}

var bindColumnHandlers = function () {
  var columnsHTML = null;
  columnsHTML = document.getElementsByClassName('column')
  for (var i = 0; i < columnsHTML.length; i++) {
    columnsHTML[i].onclick = columnEventHandler
  };
}

class Products extends React.Component() {

  constructor(pros){
    super(pros)
    this.state = {screens: 'Products'};
  }

  render(){
    var boardHTML = null;
    
    var html = ''
    for (var i = 0; i < board.length; i++) {
    html += '<div id="c' + i + '" class="column">'
    for (var j = board[i].length - 1; j >= 0; j--) {
      html += '<div id="s' + i + j + '" class="spot'
      if (board[i][j]) html += ' ' + board[i][j]
      html += '"></div>'
    }
    html += '</div>';
  }
    boardHTML.innerHTML = html;
    bindColumnHandlers();


    return (
      <div className="Products">
        <div className='wrapper'>
          <div className='header'><a href='#'>&larr; Back</a></div>
            <div className='game'>
              <div id='board' className='board'>
                <Board />
              </div>
              <div className='ribbon'></div>
              <div className='players'>
                  <div className='spot yellow'></div>
                  <div className='player p1'></div>
                  <div className='direction left'></div>
                  <div className='direction text'></div>
                  <div className='direction right'></div>
                  <div className='player p2'></div>
                  <div className='spot red'></div>
              </div>
            </div>
            <div className='footer'>
                <button className='fb'>&#x1f44d; Like</button>
                <button className='embed'>Embed</button>
            </div>
        </div>
        
      </div>
    );
  }
  
}

export default Products;