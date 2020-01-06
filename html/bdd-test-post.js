const app = require('./app');
const server = app.listen();
const request = require('supertest').agent(server);

describe( 'app', function() {
    after(function() {
        server.close()
    });

    describe('Post',function(){
        it('should create a new post and redirect /' , function(done){
            request
            .post('/post')
            .send({title: 'Title', body: 'Contents'})
            .end(function(err, res) {
                res.header.location.should.be.equal('/');
                done();
            })
        })
    })
})