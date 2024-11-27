let pessoa = {
    nome: "Tech"
}
    let pessoa2 = pessoa;

    console.log(pessoa == pessoa2); //true

    pessoa2.nome = "Crosshair";

    console.log(pessoa.nome);

    pessoa.nome = "Hunter";

    console.log(pessoa2.nome);