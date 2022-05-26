    const tablero = ["","","","","","","","",""];
    var turn ="X";
    var plays = 0;
    
    document.getElementById("player").innerHTML = turn;

    function game(cell){
        if (tablero[cell] == 'X'){
            console.log("No puede ingresar");
        }else if(tablero[cell] == 'O'){
            console.log("No puede ingresar");
        }else{
            if (turn == "X") {
                tablero[cell]=document.getElementById(cell).innerHTML = "X";
                turn = "O";
                document.getElementById("player").innerHTML = turn;
            }else{
                tablero[cell]=document.getElementById(cell).innerHTML = "O";
                turn = "X";
                document.getElementById("player").innerHTML = turn;
            }
            validation();
        }
    }

    function validation(){
        plays++;
        var winner=document.getElementById("winner");

        if (plays < 9)
        {
            // Validacion de filas

            if("X" == tablero[0] && "X" == tablero[1] && "X" == tablero[2]){
                winner.innerHTML = "X";
                //window.location.reload();
                
            } else if("O" == tablero[0] && "O" == tablero[1] && "O" == tablero[2]){
                winner.innerHTML = "O";
                //window.location.reload();
            }

            if("X" == tablero[3] && "X" == tablero[4] && "X" == tablero[5]){
                winner.innerHTML = "X";
                //window.location.reload();
            } else if("O" == tablero[3] && "O" == tablero[4] && "O" == tablero[5]){
                winner.innerHTML = "O";
                //window.location.reload();
            }

            if("X" == tablero[6] && "X" == tablero[7] && "X" == tablero[8]){
                 winner.innerHTML = "X";
                //window.location.reload();
            } else if("O" == tablero[6] && "O" == tablero[7] && "O" == tablero[8]){
                winner.innerHTML = "O";
                //window.location.reload();
            }

            //Validacion de columnas

            if("X" == tablero[0] && "X" == tablero[3] && "X" == tablero[6]){
                winner.innerHTML = "X";
                //window.location.reload();
            } else if("O" == tablero[0] && "O" == tablero[3] && "O" == tablero[6]){
                winner.innerHTML = "O";
                //window.location.reload();
            }

            if("X" == tablero[1] && "X" == tablero[4] && "X" == tablero[7]){
                winner.innerHTML = "X";
                //window.location.reload();
            } else if("O" == tablero[1] && "O" == tablero[4] && "O" == tablero[7]){
                winner.innerHTML = "O";
                //window.location.reload();
            }

            if("X" == tablero[2] && "X" == tablero[5] && "X" == tablero[8]){
                winner.innerHTML = "X";
                //window.location.reload();
            } else if("O" == tablero[2] && "O" == tablero[5] && "O" == tablero[8]){
                winner.innerHTML = "O";
                //window.location.reload();
            }

            //Validacion de diagonales

            if("X" == tablero[0] && "X" == tablero[4] && "X" == tablero[8]){
                winner.innerHTML = "X";
                //window.location.reload();
            } else if("O" == tablero[0] && "O" == tablero[4] && "O" == tablero[8]){
                winner.innerHTML = "O";
                //window.location.reload();
            }

            if("X" == tablero[2] && "X" == tablero[4] && "X" == tablero[6]){
                winner.innerHTML = "X";
                //window.location.reload();
            } else if("O" == tablero[2] && "O" == tablero[4] && "O" == tablero[6]){
                winner.innerHTML = "O";
                //window.location.reload();
            }
        }else{

            //Validacion empate

                winner.innerHTML = "Empate!";
            }
        
    }


                
