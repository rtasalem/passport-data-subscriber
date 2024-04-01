const { ServiceBusClient } = require('@azure/service-bus')

const connectionString = process.env.ASB_CONN_STR
const topic = process.env.ASB_TOPIC
const subscription = process.env.ASB_SUB
const sbClient = new ServiceBusClient(connectionString)
const receiever = sbClient.createReceiver(topic, subscription)
