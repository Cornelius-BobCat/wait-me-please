/**
 * Retrieves the count of records in the "ping" table from the SQLite database.
 * @returns {Promise<number>} A promise that resolves to the count of records.
 */
export async function CountPing(): Promise<string> {
  const sqlite3 = require("sqlite3").verbose();
  const db = new sqlite3.Database("olaf.db", (err: any) => {
    if (err) {
      console.error(err.message);
    }
  });

  return new Promise<string>((resolve, reject) => {
    db.get("SELECT COUNT(*) AS count FROM ping", (err: any, row: any) => {
      if (err) {
        console.error(err.message);
        reject(err.message);
      } else {
        resolve(row ? row.count.toString() : "0");
      }
    });
  });
}
