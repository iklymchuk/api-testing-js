const expect = require('chai').expect;

const getUser = require('./../src/getUser').getUser;

describe('Get User tests', () => {
  
    it('Get a user by username', () => {
        return getUser('iklymchuk')
            .then(response => {

                //expect an object back
                expect(typeof response).to.equal('object');

                //Test result of name, company and location for the response
                expect(response.name).to.equal('Ivan Klymchuk')
                expect(response.company).to.equal(null)
                expect(response.location).to.equal('Ukraine, Kiev')
            });
    });
});