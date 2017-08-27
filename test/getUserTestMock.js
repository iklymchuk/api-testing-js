const expect = require('chai').expect;
const nock = require('nock');

const getUser = require('./../src/getUser').getUser;

//mock data
const response = require('./../resources/mocks/getUserResponse');

describe('Get User tests', () => {
    
    //mocking getUser response
    beforeEach(() => {
        nock('https://api.github.com')
            .get('/users/iklymchuk')
            .reply(200, response);
    });

    it('Get a user by username with Mock', () => {
        return getUser('iklymchuk')
            .then(response => {

                //expect an object back
                expect(typeof response).to.equal('object');

                //Test result of name, company and location for the response
                expect(response.name).to.equal('Ivan Klymchuk')
                expect(response.company).to.equal(null)

                //not true, mocking data
                expect(response.location).to.equal(null)
            });
    });
});