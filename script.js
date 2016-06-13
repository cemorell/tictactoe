$(document).ready (function() {

  Var playerOne= 0;
  Var playerTwo= 0;
  var tttArray = [0,0,0,0,0,0,0,0,0];
  // var winner= 0;
  // Var currentPlayer= 0;

// selecting players' turn
  function playerTurn (){
    var n = Math.floor(Math.random() * 10)
    if (n%2===0){
      turn = player1;
      alert("player1  turn!");
      //message box?
    }
    else {
      turn= player2;
      alert("player2  turn!");
      //message box?
      //COME BACK AND TAKE PLAYER NAMES OUT OF QUOTES
    }
  };
  $('.game').click(function(e) {

      }
        });















});
