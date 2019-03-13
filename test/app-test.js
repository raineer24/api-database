const knex =require('../db/knex');

describe('CRUD stickers', () => {
    before(() => {
        //run migrations
        knex.migrate.latest()
        .then(() => {
             // run seeds
            return knex.seed.run();
        })
    });
});