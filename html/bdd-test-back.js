const app = require('./app');
const server = app.listen();
const request = require('supertest').agent(server);

describe( 'app', function() {
    after(function() {
        server.close()

    });
    describe('Back', function() {
        it('should go back to the /html page', function(done) {
          request
          .get('/html')
          .expect(200, function(err, res) {
            if (err) return done(err);
            res.should.be.html;
            done();
          });
        });
    });
});