const request = require('supertest');
const knex =require('../db/knex');

const app = require('../app');

describe('CRUD stickers', () => {
    before((done) => {
        //run migrations
        knex.migrate.latest()
        .then(() => {
             // run seeds
            return knex.seed.run();
        }).then(() =>done());
    });

    it('List all records', (done) => {
      request(app)  
        .get('/api/v1/stickers')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
});

