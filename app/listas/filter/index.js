const { obterPessoa } = require("../../service");

Array.prototype.meuFilter = function (callback) {
  const list = [];
  for (index in this) {
    const item = this[index];
    const result = callback(item, index, this);

    if (!result) continue;
    list.push(item);
  }

  return list;
};

async function main() {
  try {
    const { results } = await obterPessoa(`a`);

    const familiaLars = results.meuFilter((item, index, lista) => {
      console.log(`index:${index}`, lista.length);
      return item.name.toLowerCase().indexOf("lars") !== -1;
    });

    const names = familiaLars.map((pessoas) => pessoas.name);
    console.log(names);
  } catch (err) {
    console.log("error", err);
  }
}

main();
