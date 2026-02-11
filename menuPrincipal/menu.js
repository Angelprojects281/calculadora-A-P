function navegacion() {
    let figura= document.getElementById("figura").value; // toma el valor de la figura seleccionada

    switch(figura){
        case "cuadrado":
            window.location.href= "htmlFiguras/cuadrado.html"
            break;
        case "triangulo":
            window.location.href= "htmlFiguras/triangulo.html"
            break;
        case "circulo": 
            window.location.href= "htmlFiguras/circulo.html"
            break;
        case "rombo":
            window.location.href= "htmlFiguras/rombo.html"
            break;
        case "trapecio":
            window.location.href= "htmlFiguras/trapecio.html"
            break;
        default:
            document.getElementById("resultado").innerHTML= "no se selecciono ninguna figura"
            break;
    }
}