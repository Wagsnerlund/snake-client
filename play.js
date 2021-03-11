const { connect } = require('./client');
const { setupInput } = require('./input');

console.log('Connecting ...');

let connection = connect();
setupInput(connection);


// Update play.js to send the connection object returned from connect() into our setupInput() function.

// Our input module can now use the connection variable to send movement commands/messages to the server.

// Run the code again to ensure that it is valid and runnable, as before.