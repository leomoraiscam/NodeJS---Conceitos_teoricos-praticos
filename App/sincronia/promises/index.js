// Objetivos
// 0 - Obter um usuário
// 1 - Obter o numero de telefone de um usuario a partir de seu id.
// 2 - Obter o enderecço do usuário pelo seu Id.

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

const usuarioPromise = obterUsuario();
usuarioPromise
  .then(function (resultado) {
    return obterTelefone(resultado.id).then(function resolverTelefone(result) {
      return {
        usuario: {
          id: resultado.id,
          nome: resultado.nome,
        },
        telefone: result,
      };
    });
  })
  .then(function (resultado) {
    const endereco = obterEnderecoAsync(resultado.usuario.id);

    return endereco.then(function resolveEndereco(result) {
      return {
        usuario: resultado.usuario,
        telefone: resultado.telefone,
        endereco: result,
      };
    });
  })
  .then(function (resultado) {
    console.log(`
      identificação do usuário: ${resultado.usuario.id},
      nome do usuário: ${resultado.usuario.nome},
      telefone do usuário: ${resultado.telefone.ddd} ${resultado.telefone.telefone},
      endereço do usuário: ${resultado.endereco.rua}, ${resultado.endereco.numero}
    `);
  })
  .catch(function (error) {
    console.error("Deu error", error);
  });
