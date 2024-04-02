const { delay, ServiceBusClient } = require('@azure/service-bus')

const connectionString = process.env.ASB_CONN_STR
const topicReceiver = process.env.ASB_TOPIC_RECEIVER
const subscriptionReceiver = process.env.ASB_SUB_RECEIVER
const sbClient = new ServiceBusClient(connectionString)
const receiver = sbClient.createReceiver(topicReceiver, subscriptionReceiver)
const topicSender = process.env.ASB_TOPIC_SENDER
const subscriptionSendfer = process.env.ASB_SUB_SENDER
const sender = sbClient.createSender(topicSender)

const receiveFromTopic = async () => {
  const handleMessage = async (message) => {
    await sender.sendMessages({
      body: message.body
    })
    console.log(
      `New message received from ${topicReceiver} (subscription: ${subscriptionReceiver}) and sent to ${topicSender} (subscription: ${subscriptionSendfer})`
    )
  }

  const handleError = async (error) => {
    console.error(error)
  }

  receiver.subscribe({
    processMessage: handleMessage,
    processError: handleError
  })

  await delay(10000)
}

module.exports = receiveFromTopic
