var teclas = {
    UNO: 49,
    DOS: 50,
    TRES: 51
  };

var piedra = 1;
var papel = 2;
var tijera = 3;

document.addEventListener("keyup", game);

function game(key)
{
    var maquina = parseInt(Math.random() * 3 + 1);
    switch (key.keyCode)
    {
        case teclas.UNO:
            logica(piedra);
        break;
        case teclas.DOS:
            logica(papel);
        break
        case teclas.TRES:
            logica(tijera);
        break
    }
}
function logica(user)
{
    var maquina = parseInt(Math.random() * 3 + 1);
    var select;
    if (maquina ===1){
        select = "<i class='fas fa-hand-rock icon-1'></i>";
    }else if (maquina === 2){
        select = "<i class='fas fa-hand-paper icon-1'></i>";
    }else {
        select = "<i class='fas fa-hand-scissors icon-1'></i>";
    }
    if (user === maquina)
    {
        document.getElementById("resultado").innerHTML = "Has empatado";
        document.getElementById("machine").innerHTML = select;
    }else if (
        (user === piedra && maquina === tijera) ||
        (user === papel && maquina === piedra) ||
        (user === tijera && maquina === papel)
        )
    {
            document.getElementById("resultado").innerHTML = "Has ganado"
            document.getElementById("machine").innerHTML = select;
    }else
    {
        document.getElementById("resultado").innerHTML = "Has Perdido"
        document.getElementById("machine").innerHTML = select;
    }
    console.log("la opción de la maquina es: " + maquina);
}
