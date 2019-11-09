const app = require('./app');
const server = app.listen();
const request = require('supertest').agent(server);

describe( 'app', function() {
    after(function() {
        server.close()

    });
    describe('GET /', function() {
        it('should see the title "網路部落格"', function(done) {
          request
          .get('/')
          .expect(200, function(err, res) {
            if (err) return done(err);
            res.should.be.html;
            res.text.should.be('<h1>網路部落格</h1>');
            done();
          });
        });
    });
});