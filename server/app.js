const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')

const wsSocket = require('./utils/ws')

const PORT = process.env.PORT || 9021;

const corsOptions = {
  origin: [process.env.API, "http://127.0.0.1:9020", "http://localhost:9020"],
  credentials: true,
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions))

app.use(bodyParser.json({ limit: '50mb', extended: true, parameterLimit: 50000 }));       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.use(express.json())

const server = app.listen(PORT, '127.0.0.1', () => { console.log('Server Started on Port: ' + PORT) })

wsSocket.configure(server);

app.use('/api/test/', require('./routes/test'));