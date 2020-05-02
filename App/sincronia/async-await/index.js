const util = require("util");
const obterEnderecoAsync = util.promisify(obterEndereco);

function obterUsuario() {
  return new Promise(function resolvePromise(resolve, reject) {
    setTimeout(function () {
      return resolve({
        id: 1,
        nome: "Aladin",
        dataNascimento: new Date(),
      });
    }, 1000);
  });
}

function obterTelefone(id) {
  return new Promise(function resolvePromise(resolve, reject) {
    setTimeout(function () {
      return resolve({
        telefone: "1199002",
        ddd: 11,
      });
    }, 2000);
  });
}

function obterEndereco(id, callback) {
  setTimeout(function () {
    return callback(null, {
      rua: "rua A",
      numero: 0,
    });
  }, 2000);
}

main();
async function main() {
  try {
    console.time("medida-promise");
    const usuario = await obterUsuario();

    const resultado = await Promise.all([
      obterTelefone(usuario.id),
      obterEnderecoAsync(usuario.id),
    ]);

    const endereco = resultado[1];
    const telefone = resultado[0];

    console.log(`
      Identificação do usuário:${usuario.id},
      Nome do usuário: ${usuario.nome},
      Telefone do usuário: (${telefone.ddd}) ${telefone.telefone},
      Endereco do usuário: ${endereco.rua}, ${endereco.numero}
    `);
    console.timeEnd("medida-promise");
  } catch (error) {
    console.error("Deu erro", error);
  }
}
