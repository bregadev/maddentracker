const Pool = require('pg').Pool;

let index = function index(event, context, callback) {

const pool = new Pool({
  user: process.env.POSTGRES_USERNAME,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DATABASE,
  password: process.env.POSTGRES_PASSOWRD,
  port: process.env.POSTGRES_PORT,

});

const newGame = (body) => {
    return new Promise(function(resolve, reject) {
      const {winner,loser,winning_score,losing_score} = body;
      var sql = 'INSERT INTO "public"."games" ("winner", "loser", "winning_score", "losing_score", "game_date") VALUES ($1,$2,$3,$4) Returning *;update games set dub = "true" where winning_score-losing_score > 20;';
      pool.query(sql,[winner,loser,winning_score,losing_score], (error, results) => {
        if (error) {
          reject(error)
        }
        resolve('A new game has been recorded: ${results.rows[0]}');
      })
     
    }) 
  }


}
  exports.handler = index;