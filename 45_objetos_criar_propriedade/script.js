let pessoa = {
       nome: "Carlos",
       idade: 28,
       peso: 60,
};

    console.log(pessoa.nome);

    delete pessoa.nome;

    console.log("Nome: " + pessoa.nome);

    console.log(pessoa);

    pessoa.colecionador = true;

    console.log("Colecionador: " + pessoa.colecionador);


