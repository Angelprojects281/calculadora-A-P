function calcular() {
    let lado= parseFloat(document.getElementById("lado").value);
    let diag1= parseFloat(document.getElementById("diagonal1").value);
    let diag2= parseFloat(document.getElementById("diagonal2").value);
    let con1= parseFloat(((diag1*diag1) + (diag2*diag2)).toFixed(2))
    let con2= parseFloat(((lado * lado)*4).toFixed(2))
    if (!validar()) {
        document.getElementById("resultado").innerHTML= "entrada invalida";
        limpiar();
        return;
    } else if (!(con1 == con2)){ 
        document.getElementById("resultado").innerHTML= "este es un rombo imposible";
        limpiar();
        return;        
    } else {    
        let perimetro= 4 * lado
        let area= (diag1 * diag2)/ 2

        document.getElementById("resultado").innerHTML= "sus datos ingresados son: <br>" + "longitud lados: " + lado + "<br>diagonal 1: " + diag1 + "<br>diagonal 2: " + diag2 + "<br>el area de este rombo es: " + area.toFixed(2) + "<br>y el perimetro es: " + perimetro.toFixed(2)

        registrar("rombo", area, perimetro);
    }
    limpiar()
}