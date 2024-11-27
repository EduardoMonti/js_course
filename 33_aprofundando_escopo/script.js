let x = 10;


 if (x > 5) {
    let x = 20;
    x++;
    console.log("valor x escopo do 'if': " + x);
 }

    console.log("Valor x escopo global: " + x);