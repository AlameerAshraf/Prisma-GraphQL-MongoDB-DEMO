const server = require('./createServer');
const db = require('./db');

//Make authentiction Here 

server().start({
    cors : {
        credentials : false,
        origin : 'http://localhost:7788'
    }
} , strt => {
    console.warn(`server is started and running on ${strt.port}`);
})