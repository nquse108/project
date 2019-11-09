const app = require('./app');
const server = app.listen();
const request = require('supertest').agent(server);

describe( 'app', function() {
    after(function() {
        server.close();

    describe('LogIn', function() {
    it('should Login account and redirect to /', function(done) {
        request
        
        
        if (err) return done(err);
        res.header.location.should.be.equal('/');
        done();
            });
        });
    });
});