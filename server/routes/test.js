const express = require('express');
const router = express.Router();
const wsSocket = require('../utils/ws');

router.get('/', async (req, res, next) => {


  setTimeout(function () {
    // reply to all
    //   wsSocket.io.emit('message', {
    //     message: 'THIS IS A MESSAGE FROM ROUTES',
    //   });

    // reply to a specific client
    wsSocket.io.to(req.query.clientId).emit('FROM ROUTES: ', req.query.clientId)
  }, 1000);

  res.sendStatus(200)
})

module.exports = router;