require('dotenv').config({ path: '../.env' })
const receiveFromTopic = require('./receive-from-topic')

receiveFromTopic()
