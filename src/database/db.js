import { Database }  from 'sqlite-async';

Database.open('/database.db').then(execute)
function execute(db){
   db.execute(`
      CREATE TABLE IF NOT EXISTS events (
         id INTEGER PRIMARY KEY AUTOINCREMENT,
         lat TEXT,
         lng TEXT,
         title TEXT,
         descricao TEXT,
         instrucao TEXT,
         datestart TEXT,
         dateend TEXT,
         timeevent TEXT,
         gratuito TEXT,
         images BLOP,
         image TEXT
      )
   `)
}
   

  