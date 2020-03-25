var ws = require("nodejs-websocket");

// Scream server example: "hi" -> "HI!!!"
const PORT = 3000;
var clientCount = 0;
var server = ws
  .createServer(function(conn) {
    clientCount++;
    conn.userName = `user${clientCount}`;
    let msg = {};
    msg.type = "enter";
    msg.data = `${conn.userName} is enter`;
    // 广播
    broadcast(msg);
    // 接收到消息
    conn.on("text", function(str) {
      let msg = {};
      msg.type = "message";
      msg.data = `${conn.userName} says： ${str}`;
      broadcast(msg);
    });
    // 断开连接的时候 由客户端断开连接的时候监听得到
    conn.on("close", function(code, reason) {
      let msg = {};
      msg.type = "leave";
      msg.data = `${conn.userName} is leave`;
      broadcast(msg);
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
    item.sendText(JSON.stringify(str));
  });
}
console.log("websocket server is run at post" + PORT);
