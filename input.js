let connection;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  const handleUserInput = function (key) {
    if (key === '\u0003') {
      process.exit();
    };
    if (key === 'w') {
      connection.write('Move: up');
    };
    if (key === 'a') {
      connection.write('Move: left');
    };
    if (key === 's') {
      connection.write('Move: down');
    };
    if (key === 'd') {
      connection.write('Move: right');
    };
    if (key === 'r') {
      connection.write("Says: I'm a slithery little sneaky snake!");
    };
    if (key === 'm') {
      connection.write("Says: Slither in the garden, catching me a mouse!");
    };
  };

  stdin.on("data", handleUserInput);

  return stdin;
};

module.exports = { setupInput };