const fs = require("fs");

const showdown = require("showdown");
const converter = new showdown.Converter();
converter.setOption("tables", "true");

fs.promises.mkdir("./docs/html");

fs.readdir("./docs/", "utf-8", (err, files) => {
  files.forEach((file) => {
    fs.lstat("./docs/" + file, (err, stats) => {
      if (stats.isFile()) {
        fs.readFile("./docs/" + file, (err, data) => {
          if (err) throw err;
          let html = converter.makeHtml(data.toString());

          fs.writeFile(
            "./docs/html/" + file.split(".md")[0] + ".html",
            html,
            (err) => {
              console.log("File created");
            }
          );
        });
      }
    });
  });
});
