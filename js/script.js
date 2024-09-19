function calcularSigno()
{
    var anio=document.getElementById('anio').value;
    let resto=anio%12;
    let signo="";
    let imagen="";
    switch (resto)
    {
        case 0:
            signo="Mono"
            imagen="./imagenes/mono.jpeg"
            break;
        case 1:
            signo="Gallo"
            imagen="./imagenes/gallo.jpeg"
            break;
        case 2:
            signo="Perro"
            imagen="./imagenes/perro.jpeg"
            break;
        case 3:
            signo="Cerdo"
            imagen="./imagenes/cerdo.jpeg"
            break;
        case 4:
            signo="Rata"
            imagen="./imagenes/rata.jpeg"
            break;
        case 5:
            signo="Buey"
            imagen="./imagenes/buey.jpeg"
            break;
        case 6:
            signo="Tigre"
            imagen="./imagenes/tigre.jpeg"
            break;
         case 7:
            signo="Conejo"
            imagen="./imagenes/conejo.jpeg"
            break;
        case 8:
            signo="Dragón"
            imagen="./imagenes/dragon.jpeg"
            break;
        case 9:
            signo="Serpiente"
            imagen="./imagenes/serpiente.jpeg"
            break;
        case 10:
            signo="Caballo"
            imagen="./imagenes/caballo.jpeg"
            break;
        case 11:
            signo="Cabra"
            imagen="./imagenes/cabra.jpeg"
            break;
    }
    document.getElementById('resto').innerHTML=resto;
    document.getElementById('signo').innerHTML=signo;
    document.getElementById('imagen').src=imagen;
}