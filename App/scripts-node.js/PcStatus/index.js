const os = require("os");
const logger = require("../Logger");

setInterval(() => {
  const { freemem, totalmem } = os;

  const total = `${parseInt(totalmem() / 1024 / 1024)}`;
  const mem = parseInt(freemem() / 1024 / 1024);
  const percents = parseInt((mem / total) * 100);

  const stats = {
    free: `${mem} MB`,
    total: `${total} MB`,
    usage: `${percents}%`,
  };

  console.clear();
  console.log("*** PC STATUS ***");
  console.table(stats);
  logger(`${JSON.stringify(stats)}\n`);
}, 1000);
