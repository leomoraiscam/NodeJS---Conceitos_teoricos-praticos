// Objetivos
// 0 - Obter um usuário
// 1 - Obter o numero de telefone de um usuario a partir de seu id.
// 2 - Obter o enderecço do usuário pelo seu Id.

function obterUsuario(callback) {
  setTimeout(function () {
    return callback(null, {
      id: 1,
      nome: "Aladin",
      dataNascimento: new Date(),
    });
  }, 1000);
}

function obterTelefone(id, callback) {
  setTimeout(function () {
    return callback(null, {
      telefone: "1199002",
      ddd: 11,
    });
  }, 2000);
}

function obterEndereco(id, callback) {
  setTimeout(function () {
    return callback(null, {
      rua: "rua A",
      numero: 0,
    });
  }, 2000);
}

function resolverUsuario(error, usuario) {
  console.log("usuário", usuario);
}

obterUsuario(function resolverUsuario(error, usuario) {
  if (error) {
    console.error("Deu error", error);
    return;
  }

  obterTelefone(usuario.id, function resolverTelefone(error1, telefone) {
    if (error1) {
      console.error("Deu error", error);
      return;
    }

    obterEndereco(usuario.id, function resolverEndereco(error2, endereco) {
      if (error2) {
        console.error("Deu error", error);
        return;
      }

      console.log(`
          Identificação do usuário: ${usuario.id},
          Nome do usuário: ${usuario.nome},
          Endereço do usuário: ${endereco.rua}, ${endereco.numero}
          telefone do usuário: (${telefone.ddd}) ${telefone.telefone}`);
    });
  });
});
