class DatabaseConnection {
  constructor() {
    if (DatabaseConnection.instance) {
      return DatabaseConnection.instance;
    }

    this.connection = this.connectToDatabase();
    DatabaseConnection.instance = this;
    return this;
  }

  connectToDatabase() {
    console.log("Establishing database connection");
    return { connected: true };
  }

  getConnection() {
    return this.connection;
  }
}

const db1 = new DatabaseConnection();
console.log("DB1 connection: ", db1.getConnection());

const db2 = new DatabaseConnection();
console.log("DB2 connection: ", db2.getConnection());

console.log("Same object db1 === db2 ? : ", db1 === db2);

/*
OUTPUT:
DB1 connection:  { connected: true }
DB2 connection:  { connected: true }
Same object db1 === db2 ? :  true
*/
