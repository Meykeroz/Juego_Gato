    const tablero = ["","","","","","","","",""];
    var turn ="X";
    var plays = 0;
    var winner = false;
    
    document.getElementById("player").innerHTML = turn;

    function game(cell){
        
        if (winner == false) {
            if (tablero[cell] == 'X'){
                console.log("No puede ingresar");
            }else if(tablero[cell] == 'O'){
                console.log("No puede ingresar");
            }else{
                if (turn == "X") {
                    plays++;
                    tablero[cell]=document.getElementById(cell).innerHTML = "X";
                    turn = "O";
                    document.getElementById("player").innerHTML = turn;
                    validation();
                }else{
                    plays++;
                    tablero[cell]=document.getElementById(cell).innerHTML = "O";
                    turn = "X";
                    document.getElementById("player").innerHTML = turn; 
                    validation();
                }     
            } 
         }else{
             console.log("Juego terminado!");
         }
    }

    function validation(){
            // Validacion de filas
            if("X" == tablero[0] && "X" == tablero[1] && "X" == tablero[2]){
                //alert("Gano la X");
                //winner.innerHTML = "X";
                document.getElementById("label").innerHTML = "El ganador es :";
                document.getElementById("player").innerHTML = "X";
                winner=true;
                
            } else if("O" == tablero[0] && "O" == tablero[1] && "O" == tablero[2]){
                //winner.innerHTML = "O";
                document.getElementById("label").innerHTML = "El ganador es :";
                document.getElementById("player").innerHTML = "O";
                winner=true;
            }

            if("X" == tablero[3] && "X" == tablero[4] && "X" == tablero[5]){
                document.getElementById("label").innerHTML = "El ganador es :";
                document.getElementById("player").innerHTML = "X";
                winner=true;
            } else if("O" == tablero[3] && "O" == tablero[4] && "O" == tablero[5]){
                document.getElementById("label").innerHTML = "El ganador es :";
                document.getElementById("player").innerHTML = "O";
                winner=true;
            }

            if("X" == tablero[6] && "X" == tablero[7] && "X" == tablero[8]){
                document.getElementById("label").innerHTML = "El ganador es :";
                document.getElementById("player").innerHTML = "X";
                winner=true;
            } else if("O" == tablero[6] && "O" == tablero[7] && "O" == tablero[8]){
                document.getElementById("label").innerHTML = "El ganador es :";
                document.getElementById("player").innerHTML = "O";
                winner=true;
            }

            //Validacion de columnas

            if("X" == tablero[0] && "X" == tablero[3] && "X" == tablero[6]){
                document.getElementById("label").innerHTML = "El ganador es :";
                document.getElementById("player").innerHTML = "X";
                winner=true;
            } else if("O" == tablero[0] && "O" == tablero[3] && "O" == tablero[6]){
                document.getElementById("label").innerHTML = "El ganador es :";
                document.getElementById("player").innerHTML = "O";
                winner=true;
            }

            if("X" == tablero[1] && "X" == tablero[4] && "X" == tablero[7]){
                document.getElementById("label").innerHTML = "El ganador es :";
                document.getElementById("player").innerHTML = "X";
                winner=true;
            } else if("O" == tablero[1] && "O" == tablero[4] && "O" == tablero[7]){
                document.getElementById("label").innerHTML = "El ganador es :";
                document.getElementById("player").innerHTML = "O";
                winner=true;
            }

            if("X" == tablero[2] && "X" == tablero[5] && "X" == tablero[8]){
                document.getElementById("label").innerHTML = "El ganador es :";
                document.getElementById("player").innerHTML = "X";
                winner=true;
            } else if("O" == tablero[2] && "O" == tablero[5] && "O" == tablero[8]){
                document.getElementById("label").innerHTML = "El ganador es :";
                document.getElementById("player").innerHTML = "O";
                winner=true;
            }

            //Validacion de diagonales

            if("X" == tablero[0] && "X" == tablero[4] && "X" == tablero[8]){
                document.getElementById("label").innerHTML = "El ganador es :";
                document.getElementById("player").innerHTML = "X";
                winner=true;
            } else if("O" == tablero[0] && "O" == tablero[4] && "O" == tablero[8]){
                document.getElementById("label").innerHTML = "El ganador es :";
                document.getElementById("player").innerHTML = "O";
                winner=true;
            }

            if("X" == tablero[2] && "X" == tablero[4] && "X" == tablero[6]){
                document.getElementById("label").innerHTML = "El ganador es :";
                document.getElementById("player").innerHTML = "X";
                winner=true;
            } else if("O" == tablero[2] && "O" == tablero[4] && "O" == tablero[6]){
                document.getElementById("label").innerHTML = "El ganador es :";
                document.getElementById("player").innerHTML = "O";
                winner=true;
            }
            if (plays == 9 && winner== false) {
                document.getElementById("label").style.background = "yellow";
                document.getElementById("label").innerHTML = "Empate!";
                document.getElementById("player").innerHTML = " ";
                
            }
         }
    
    function reload(){
        window.location.reload();
    }


                
    