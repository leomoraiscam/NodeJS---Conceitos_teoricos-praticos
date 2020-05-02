const service = require("../../service");

Array.prototype.meuMap = function (callback) {
  const arrayMapeado = [];
  for (let i = 0; i <= this.length - 1; i++) {
    const resultado = callback(this[i], i);
    arrayMapeado.push(resultado);
  }

  return arrayMapeado;
};

async function main() {
  try {
    const resultado = await service.obterPessoa("a");

    const names = resultado.results.meuMap(function (pessoa, i) {
      return `[${i}]${pessoa.name}`;
    });
    console.log("names", names);
  } catch (err) {
    console.log("error", err);
  }
}

main();
