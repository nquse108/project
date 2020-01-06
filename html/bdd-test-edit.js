const app = require('./app');
const server = app.listen();
const request = require('supertest').agent(server);

describe( 'app', function() {
    after(function() {
        server.close()
    })
    describe('Edit',function(){
        it('should edit title , context and rediect to /html',function(done){

        })
    })
})