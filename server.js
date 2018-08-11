const fs = require("fs");
const http = require("http");
const port = 3000;

const reqHandler = (reqHandler, res) => {
  const message = "Request received. Writing file...";
  res.end(message, () => {
    console.log(message);
    fs.writeFile("./hello-world.txt", "Hello to this great world", err => {
      if (err) console.log(err);

      console.log("Finished writing file.");
    });
  });
};

const server = http.createServer(reqHandler);

server.listen(port, err => {
  if (err) console.log(err);

  console.log(`server is listening on port: ${port}`);
});
