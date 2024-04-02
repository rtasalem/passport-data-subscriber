require('dotenv').config({ path: '../.env' })
const receiveFromTopic = require('./receive-from-topic')
const receiveFromSendToTopic = require('./receive-send-topic')

receiveFromTopic()
receiveFromSendToTopic()
