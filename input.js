let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume(); 
  stdin.on("data", key => handleUserInput(key));
  return stdin;
};

const handleUserInput = function(key) {
  const input = key.toLowerCase();
  if (input === '\u0003') {
    process.exit();
  }
  if (input === 'w') {
    connection.write("Move: up");
  }
  if (input === 'a') {
    connection.write("Move: left");
  }
  if (input === 'd') {
    connection.write("Move: right");
  }
  if (input === 's') {
    connection.write("Move: down");
  }
  if (input === 'u') {
    connection.write("Say: Cya Nerd");
  }
  if (input === 'i') {
    connection.write("Say: You're third Rate Duelist with a Fourth Rate Deck");
  }
  if (input === 'o') {
    connection.write("Say: I could beat you without fingers");
  }
  if (input === 'p') {
    connection.write("Say: Your right arm must be stronger than your left arm");
  }
};

module.exports = { setupInput };