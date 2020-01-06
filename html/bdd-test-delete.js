const app = require('./app');
const server = app.listen();
const request = require('supertest').agent(server);

describe( 'app', function() {
    after(function() {
        server.close()
    })

    describe('Delete' , function(done){
        it('should delete a post and redirct to /html' , function(done){
            
        })
    })
})