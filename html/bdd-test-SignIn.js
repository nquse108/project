const app = require('./app');
const server = app.listen();
const request = require('supertest').agent(server);

describe( 'app', function() {
    after(function() {
        server.close();

    describe('SignIn /SignIn', function() {
    it('should redirect to / and create an account', function(done) {
        request
        .SignIn('./SignIn')

        if (err) return done(err);
        res.header.location.should.be.equal('/');
        done();
            })
        });
    });
});