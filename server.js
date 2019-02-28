const express = require('express');
const helmet = require('helmet');

// const recipeRouter = require('./routers/cohort-router.js');

const server = express();

server.use(helmet());
server.use(express.json());

// server.use('/api/cohorts', recipeRouter);

module.exports = server;