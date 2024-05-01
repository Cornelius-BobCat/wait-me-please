/**
 * Increments the 'ping' table in the SQLite database.
 *
 * @returns {Promise<void>} A promise that resolves when the operation is complete.
 */
export async function incrementPingTable() {
  const sqlite3 = require("sqlite3").verbose();
  // Connect to SQLite database, and if it doesn't exist, create it
  const db = new sqlite3.Database("olaf.db", (err: any) => {
    if (err) {
      return console.error(err.message);
    } else {
      console.log("Connected to the SQLite database.");
    }
  });

  // Create the 'ping' table if it doesn't exist
  db.run(
    `CREATE TABLE IF NOT EXISTS ping (
      id INTEGER PRIMARY KEY,
      date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )`,
    (err: any) => {
      if (err) {
        return console.error(err.message);
      }

      const insertSql = `INSERT INTO ping DEFAULT VALUES`;
      db.run(insertSql, (err: any) => {
        if (err) {
          return console.error(err.message);
        }
        console.log("New ping inserted.");
      });

      db.close((err: any) => {
        if (err) {
          return console.error(err.message);
        }
        console.log("Closed the database connection.");
      });
    }
  );
}
