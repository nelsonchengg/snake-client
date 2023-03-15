const net = require("net");
const { IP, PORT } = require ("./constants");
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });
  
  conn.on("connect", () => {
    console.log("Successfully Connected to Game Server");
    conn.write("Name: NCB");
  });

  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = {connect};