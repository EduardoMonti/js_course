   /* Escreva uma função que receba a idade de uma pessoa; Se ela tem mais de 18 anos ela pode entrar na auto escola , imprima uma mensagem informando isso
      Se ela tem menos, ela não pode, imprima outra mensagem com este aviso;
      execute a função nos dois casos;  */

   function podeEntrarNaAutoEscola(idade) {

       if(idade >= 18) {
            console.log("Pode entrar na auto escola!");
       } else {
            console.log("Não pode entrar na auto escola!");
       }
   }

       podeEntrarNaAutoEscola(18);
       podeEntrarNaAutoEscola(10);

        console.log(" ");

       /* Escreva uma função que detecta o tipo de dado passado;
         Verifique se é um number, boolean ou string e retorne uma mensagem para cada tipo;
         Execute uma função para cada caso; */


        function verificaTipoDeDado(dado){
          if(typeof dado === 'number'){
                console.log("Number");
          } else if (dado.typeof === String) {
                console.log("String");
          } else if (dado.typeof === Boolean) {
                console.log("boolean");
          }
          return typeof dado;
        }

        verificaTipoDeDado(10);
        console.log(verificaTipoDeDado(true));
        console.log(verificaTipoDeDado("Teste"));


        //Escreva uma função que receba um número negativo e retorne um número positivo; (Utilize a função Math.abs)

        function positivoNegativo(numNegativo){

          return Math.abs(numNegativo);
        }
        console.log(positivoNegativo(-1));
        console.log(positivoNegativo(-10));

        //Escreva uma função que recebe uma String; se o texto conter mais de 10 caracteres imprima "texto muito longo"; se conter menos, imprima "texto dentro do limite";

         function leString(texto) {

           if(texto.length > 10){
                console.log("Texto muito longo");
           } else {
                console.log("Texto dentro do limite");
           }
         }

           leString("Testando o método");
           leString("Teste");

           //Escreva uma função que receba dois números, o primeiro é a base e o segundo a potência; faça a operação e retorne o resultado;

           function calculaPotencia(base, exp) {

                return  Math.pow(base, exp);
           }

           console.log(calculaPotencia(2,2));
           console.log(calculaPotencia(4,2));
           console.log(calculaPotencia(3,2));

           console.log(" ");

             //Escreva uma função que recebe um número, e o decrementa de 1 em 1 com um loop; Além disso imprima somente números pares no console;
             function imprimePar(num){
                for(let i = num; i >= 0; i--){
                       if(i % 2 == 0){
                        console.log(i);
                       }
                }
             }

             imprimePar(15);









