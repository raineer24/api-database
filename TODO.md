## Add postgres DB to Heroku
* Deploy to heroku
  * line 13 [knexfile.js]
  * process.env [db/knex.js] line 1
  * Add postgress addon [ heroku addons:create heroku-postgresql ]
  * heroku open <--- visit the app
  * heroku logs (view logs )