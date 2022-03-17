const fs = require("fs");
const os = require("os");

const fiche = `{"os":"${os.type}", "version":"${os.version}"}`;
fs.readFile("./mySystem.json", "utf8", (err, data) => {
  const p = JSON.parse(data);
  console.log(p.os);
});
