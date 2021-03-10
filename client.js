const net = require('net');

const connect = function () {
  const conn = net.createConnection({
    host: "135.23.222.131",
    port: 50542
  });

  conn.setEncoding('utf8');

  conn.on("data", (dataFromServer) => {
    console.log(dataFromServer);
  })

  // const movement = {
  //   up: conn.write('Move: up'),
  //   down: conn.write('Move: down'),
  //   left: conn.write('Move: left'),
  //   right: conn.write('Move: right')
  // }

  const interval = 200;
  conn.on("connect", () => {
    console.log('Successfully connected to game server');
    conn.write('Name: CAW');
    // conn.write('Move: up');
    setTimeout(() => {
      conn.write('Move: up');
      setTimeout(() => {
        conn.write('Move: left');
          setTimeout(() => {
            conn.write('Move: left');
        }, interval);
      }, interval);
    }, interval);
  })

  return conn;
};

module.exports = connect;

// "Move: up" - move up one square (unless facing down)
// "Move: down" - move down one square (unless facing up)
// "Move: left" - move left one square (unless facing right)
// "Move: right" - move left one square (unless facing left)