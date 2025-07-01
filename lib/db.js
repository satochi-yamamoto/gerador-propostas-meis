import Database from 'better-sqlite3';
import { join } from 'path';
import { mkdirSync, existsSync } from 'fs';

const dir = join(process.cwd(), 'data');
if (!existsSync(dir)) mkdirSync(dir);
const db = new Database(join(dir, 'propostas.db'));

db.prepare(`CREATE TABLE IF NOT EXISTS propostas (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nome TEXT,
  servicos TEXT,
  preco TEXT,
  data TEXT
)`).run();

export default db;
