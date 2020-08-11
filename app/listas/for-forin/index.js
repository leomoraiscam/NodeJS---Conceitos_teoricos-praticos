const service = require("../../service");

async function main() {
  try {
    const result = await service.obterPessoa("a");
    const names = [];

    for (let i in result.results) {
      const pessoa = result.results[i];
      names.push(pessoa.name);
    }
    console.log(names);
  } catch (err) {
    console.log("error interno", err);
  }
}

main();
