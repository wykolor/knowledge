var ws = require("nodejs-websocket");

// Scream server example: "hi" -> "HI!!!"
const PORT = 3000;
var server = ws
  .createServer(function(conn) {
    console.log("New connection");
    conn.on("text", function(str) {
      console.log("Received " + str);
      conn.sendText(str.toUpperCase() + "!!!");
    });
    conn.on("close", function(code, reason) {
      console.log("Connection closed");
    });
    conn.on("error", function(error) {
      console.log(error);
    });
  })
  .listen(PORT);
console.log("websocket server is run at post" + PORT);
