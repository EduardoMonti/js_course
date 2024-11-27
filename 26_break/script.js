
   let nome = "Teste";

    for (let i = 0; i < 10; i++) {

        if(i == 3){
            nome = "Teste";
        }

        if(i == 5 && nome == "Teste") {
            console.log("O nome é Teste, pode parar");
            break;
        }
        console.log(i);
     }