const { delay, ServiceBusClient } = require('@azure/service-bus')

const connectionString = process.env.ASB_CONN_STR
const topicReceiver = process.env.ASB_TOPIC_RECEIVER
const subscriptionReceiver = process.env.ASB_SUB_RECEIVER
const sbClient = new ServiceBusClient(connectionString)
const receiver = sbClient.createReceiver(topicReceiver, subscriptionReceiver)

const receiveFromTopic = async () => {
  try {
    const handleMessage = async (message) => {
      const { firstName, lastName } = JSON.parse(message.body)
      console.log(
        `New message received from ${topicReceiver} containing details of ${firstName} ${lastName}`
      )
    }

    const handleError = async (error) => {
      console.error(`Error occurred: ${error}`)
    }

    await receiver.subscribe({
      processMessage: handleMessage,
      processError: handleError
    })

    await delay(10000)
  } catch (error) {
    console.error(`Error: ${error}`)
  } finally {
    await receiver.close()
    await sbClient.close()
  }
}

module.exports = receiveFromTopic
