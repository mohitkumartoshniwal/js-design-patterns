import DBConnection from "./DBConnection.js";
import ODBConnection from "./ODBConnection.js";

// DBConnection.newkey = 'value'

DBConnection.connect()
DBConnection.disconnect()
console.log(DBConnection)
console.log(DBConnection.constructor)

// new DBConnection.constructor('some other uri')

console.log('\n\n')

ODBConnection.connect()
ODBConnection.disconnect()
console.log(ODBConnection)
// console.log(ODBConnection.constructor)
