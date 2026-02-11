function validar() { //funcion para validar los datos ingresados por el usuario
    let validacion= document.getElementsByClassName("DatoFigura")

    for (let i= 0; i < validacion.length; i++){
        let valor= validacion[i].value; 

        if (!valor || valor<= 0) {
            return false;
        }
    }
    return true;
}