
function calcular() {
    let lado1= parseFloat(document.getElementById("lado1").value);
    let lado2= parseFloat(document.getElementById("lado2").value);// toma los valores de los inputs del usuario

    if (!validar()){ //valida que los datos ingresados sean correctos
        document.getElementById("resultado").textContent= "entrada invalida";
        limpiar()
        return;

    } else { // hace el respectivo calculo y muestra el resultado el pantalla
        let resultadoArea= lado1 * lado2
        let perimetroCuadrado= lado1 * 4
        let perimetroRectangulo= (lado1 + lado2) * 2

        if (lado1 === lado2) { //comprueba si es un cuadrado
            document.getElementById("resultado").innerHTML= 
            "tus datos ingresados son: <br>" +
            "lado 1: " + lado1.toFixed(2) + "<br>"+ 
            "lado 2: " + lado2.toFixed(2) + "<br>"+
            "el area de este cuadrado es " + resultadoArea + " y el perimetro es " + perimetroCuadrado

            registrar("cuadrado", resultadoArea, perimetroCuadrado)

        } else {
            document.getElementById("resultado").innerHTML= 
            "tus datos ingresados son: <br>" +
            "lado 1: " + lado1 + "<br>"+ 
            "lado 2: " + lado2 + "<br>"+
            "el area de este rectangulo es " + resultadoArea.toFixed(2) + " y el perimetro es " + perimetroRectangulo.toFixed(2)

            registrar("rectangulo", resultadoArea, perimetroRectangulo)
        }
        limpiar()
        
    }
}