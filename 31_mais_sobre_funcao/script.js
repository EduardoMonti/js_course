function multiplicarTresNumeros(x,y,z) {

    return x * y * z;
}

    console.log(multiplicarTresNumeros(2,2,2));

    const mult = multiplicarTresNumeros(10,10,10);

    console.log("O valor de mult é: " + mult);

    function podeDirigir(idade, cnh){
        if(idade >= 18 && cnh == true) {
            console.log("Pode dirigir");
        } else {
            console.log("Não pode dirigir");
        }
    }
        console.log(podeDirigir(19, true));
        console.log(podeDirigir(25, true));
        console.log(podeDirigir(10, false));
        console.log(podeDirigir(17, false));
