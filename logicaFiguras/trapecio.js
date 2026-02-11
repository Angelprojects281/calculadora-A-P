function calcular() {
    let base1= parseFloat(document.getElementById("base1").value);
    let base2= parseFloat(document.getElementById("base2").value);
    let lado1= parseFloat(document.getElementById("lado1").value);
    let lado2= parseFloat(document.getElementById("lado2").value);
    let altura= parseFloat(document.getElementById("altura").value);

    if (!validar()) {
        document.getElementById("resultado").innerHTML= "entrada invalida";
        limpiar();
        return;
    } else if (base1 == base2 || Math.abs(base1 - base2) >= (lado1 + lado2)){

        document.getElementById("resultado").innerHTML= "este trapecio es imposible o se tranforma en otra figura";
        limpiar();
        return;
    }else {
        let area= ((base1 + base2) * altura)/2
        let perimetro= base1 + base2 + lado1 + lado2

        document.getElementById("resultado").innerHTML= "sus datos ingresados son: " + "<br>base 1: " + base1 + "<br>base 2: " + base2 + "<br>lado 1: " + lado1 + "<br>lado 2: " + lado2 + "<br>altura: " + altura + "<br>el area de este trapecio es " + area.toFixed(2) + " y el perimetro es " + perimetro.toFixed(2);

    
        registrar("trapecio", area, perimetro)
    }
    limpiar()
}