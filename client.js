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

  conn.on("connect", () => {
    console.log('Successfully connected to game server')
  })

  conn.on("connect", () => {
    conn.write('Name:  CAW');
  })

  return conn;
};

module.exports = connect;