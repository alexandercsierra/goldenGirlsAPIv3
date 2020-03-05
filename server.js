const express = require('express');
const helmet = require('helmet');
const server = express();
const quotesRouter = require('./quotes/quotesRouter')
const episodeRouter = require('./episodes/episodeRouter')

server.use(helmet());
server.use(express.json());

server.use('/quotes', quotesRouter)
server.use('/episodes', episodeRouter)

server.get('/', (req, res)=>{
    res.status(200).json({message: `Miami, Miami, you've got style!`})
})


module.exports=server;