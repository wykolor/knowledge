var ws = require("nodejs-websocket");

// Scream server example: "hi" -> "HI!!!"
const PORT = 3000;
var clientCount = 0;
var server = ws
  .createServer(function(conn) {
    clientCount++;
    conn.userName = `user${clientCount}`;
    // 广播
    broadcast(`${conn.userName} is enter`);
    // 接收到消息
    conn.on("text", function(str) {
      broadcast(`${conn.userName} says： ${str}`);
    });
    // 断开连接的时候 由客户端断开连接的时候监听得到
    conn.on("close", function(code, reason) {
      broadcast(`${conn.userName} is leave`);
      console.log("服务端断开连接的时候");
    });
    // 连接错误
    conn.on("error", function(error) {
      console.log(error);
    });
  })
  .listen(PORT);
function broadcast(str) {
  server.connections.forEach(function(item) {
    item.sendText(str);
  });
}
console.log("websocket server is run at post" + PORT);
