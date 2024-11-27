    /* 01 - Armazene em valores em variáveis com cada um dos tipos de dados vistos;
    String, Number e Boolean */

    let nome = "Teste";
    let age = 28;
    let cnh = true;

    console.log(typeof nome);
    console.log(typeof age);
    console.log(typeof cnh);

    console.log(" ");

    /* 02-  Crie uma estrutura if que verifica a entrada na festa, se tiver mais de 18 anos pode entrar, se não, não pode; */

    let idade = 28;

    if(idade >= 18) {
        console.log("Pode entrar!");
    } else {
        console.log("Menor de 18 anos, não pode entrar!");
    }

    console.log(" ");

    /* 03- Crie uma constante com seu nome como valor; Depois uma estrutura if que verifica se o seu nome é o que está na constante;
        se estiver, emita uma mensagem de saudação com console.log();  */

     const name = "Vader";

     if (name == "Vader") {
        console.log("Saudações, lord " + name + " tudo bem?");
     } else {
        console.log("Nome diferente");
     }

     console.log(" ");

    //04 - calcule a potência dos seguintes números: 2, 3, 18 e 0
    console.log(Math.pow(2,2));
    console.log(Math.pow(3,2));
    console.log(Math.pow(18,2));

    console.log(" ");

    /* 05 - Armazene a velocidade de um carro em uma variável, com o número que desejar;
       Faça uma estrutura if/else que verifica se ele está acima da velocidade;
       80 é a velocidade permitida; se estiver acima ou abaixo exiba mensagens com console.log;
    */

    let velocidade = 81;

    if(velocidade > 80) {
        console.log("Acima da velocidade permitida!");
    } else {
        console.log("Velocidade permitida!");
    }

      console.log(" ");

      /* 06 - Faça uma estrutura if/else para verificar se um usuário pode dirigir, armazene algumas informações sobre o usuário: idade, se tem CNH;
      Se idade > 18 e não possuir CNH, exiba uma mensagem; Se idade > 18  e tem CNH, exiba uma mensagem; Se não tiver 18 nem CNH, exiba outra mensagem;
      */

      let idadeUsuario = 18;
      let possuiCNH = true;

      if(idadeUsuario >= 18 && possuiCNH == false) {
            console.log("Possui 18 anos, mas não possui CNH!");
      }  else if (idadeUsuario >= 18 && possuiCNH == true ) {
            console.log("Possui 18 anos e possui CNH!");
      } else if (idadeUsuario < 18 && possuiCNH == false) {
            console.log("Não possui 18 anos e não possui CNH!");
      }

      console.log(" ");

      // 07 - Escreva um loop while que exibe números de 0 a 10 no console;
      let num = 0;
      console.log(num);
      while(num < 10 ){
        num++;
        console.log(num);
      }

      console.log(" ");

      //08 - Escreva um loop for que exibe números de 100 a 50 no console;
        for(let cont = 100; cont >= 50; cont--){
            console.log(cont);
        }

            console.log(" ");

       //09 - Escreva um loop for ou while que exiba qual número é par e qual número é ímpar; o contador deve iniciar em 0 e ir até 50;
           for (let i = 0; i <= 50; i++){
           if(i % 2 == 0){
                console.log("O número " + i + " é par");
           } else {
                console.log("O número " + i  + " é impar");
           }
         }










