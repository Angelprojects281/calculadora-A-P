
function calcular(){ //funcion principal
    let lado1= parseFloat(document.getElementById("lado1").value);
    let lado2= parseFloat(document.getElementById("lado2").value);
    let lado3= parseFloat(document.getElementById("lado3").value);

    if (!validar()) { //valida que los datos ingresados sean correctos
        document.getElementById("resultado").textContent= "entrada invalida";
       limpiar()
        return;

    } if (!((lado1 + lado2) > lado3 && (lado1 + lado3) > lado2 && (lado2 + lado3) > lado1)) { //valida que el triangulo sea posible
        document.getElementById("resultado").textContent= "este es un triangulo imposible, intenta de nuevo";
        limpiar()
        return;

    }else { // hace el respectivo calculo y muestra el resultado el pantalla
        let perimetro= lado1 + lado2 + lado3
        let s= perimetro / 2
        let area= Math.sqrt(s * (s- lado1) * (s - lado2) * (s - lado3))

        document.getElementById("resultado").innerHTML= 
        "tus datos ingresados:<br> " + 
        "lado 1: " + lado1.toFixed(2) + "<br>" + 
        "lado 2: " + lado2.toFixed(2) + "<br>" +
        "lado 3: " + lado3.toFixed(2) + "<br>" +
        "el area de este triangulo es " + area.toFixed(2) + " y el perimetro es " + perimetro.toFixed(2)

        registrar("triangulo", area, perimetro)
    }
    limpiar()
}