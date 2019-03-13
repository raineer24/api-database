const request = require('supertest');
const expect = require('chai').expect;
const knex =require('../db/knex');

const app = require('../app');

const fixtures = require('./fixtures');

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
        .expect(200)
        .then((response) => {
            expect(response.body).to.be.a('array');
            expect(response.body).to.deep.equal(fixtures.stickers);
            done();
        })
    });
});

