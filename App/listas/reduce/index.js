const { obterPessoa } = require("../../service");

Array.prototype.meuReduce = function (callback, valorInicial) {
  let valorFinal = typeof valorInicial !== undefined ? valorInicial : this[0];
  for (let index = 0; index <= this.length; index++) {
    valorFinal = callback(valorFinal, this[index], this);
  }
  return valorFinal;
};

async function main() {
  try {
    const { results } = await obterPessoa(`a`);

    const pesos = results.map((item) => parseInt(item.height));

    const minhalista = [
      ["Leonardo", "Morais"],
      ["NodeBr", "listas"],
      ["reduce", "implementacao"],
    ];

    const total = minhalista
      .meuReduce((anterior, proximo) => {
        return anterior.concat(proximo);
      }, [])
      .join(", ");

    console.log(total);
  } catch (err) {
    console.log("error", error);
  }
}

main();
