const { deepEqual, ok } = require("assert");
const database = require("./database");

const DEFAULT_ITEM_CADASTRAR = {
  id: 1,
  nome: "Flash",
  poder: "Speed",
};

describe("Suite de manipulação de Herois", () => {
  before(async () => {
    database.cadastrar(DEFAULT_ITEM_CADASTRAR);
  });

  it("Deve pesquisar um heroi, usando arquivos", async () => {
    const expected = { DEFAULT_ITEM_CADASTRAR };
    const [resultado] = await database.listar(expected.id);

    deepEqual(resultado, expected);
  });

  it("Deve criar um heroi, usando arquivos", async () => {
    const expected = DEFAULT_ITEM_CADASTRAR;
    const resultado = await database.cadastrar(DEFAULT_ITEM_CADASTRAR);

    const [atual] = await database.listar(DEFAULT_ITEM_CADASTRAR.id);

    deepEqual(atual, expected);
  });
});
