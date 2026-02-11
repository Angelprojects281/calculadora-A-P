function limpiar(){ //funcion para limpiar los inputs despues de cada calculo
    let limpieza= document.getElementsByClassName("DatoFigura")

    for (let i= 0; i < limpieza.length; i++) {
        limpieza[i].value= "";
    }
}