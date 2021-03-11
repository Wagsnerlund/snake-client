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

  // const interval = 200;
  conn.on("connect", () => {
    console.log('Successfully connected to game server');
    conn.write('Name: CAW');
  //   setTimeout(() => {
  //     conn.write('Move: up');
  //     setTimeout(() => {
  //       conn.write('Move: left');
  //         setTimeout(() => {
  //           conn.write('Move: left');
  //       }, interval);
  //     }, interval);
  //   }, interval);
  })

  return conn;
};

module.exports = {connect};