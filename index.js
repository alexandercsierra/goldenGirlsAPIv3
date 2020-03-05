require('dotenv').config();
const server = require('./server');
const PORT = process.env.PORT || 4001;

server.listen(PORT, ()=>console.log(`listening on port ${PORT}`))