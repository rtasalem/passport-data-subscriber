const { delay, ServiceBusClient } = require('@azure/service-bus')

const connectionString = process.env.ASB_CONN_STR
const topic = process.env.ASB_TOPIC
const subscription = process.env.ASB_SUB
const sbClient = new ServiceBusClient(connectionString)
let receiver

const receiveFromTopic = async () => {
  try {
    if (!receiver) {
      receiver = sbClient.createReceiver(topic, subscription)

      const handleMessage = async (message) => {
        await receiver.receiveMessages({
          body: message.body
        })
        console.log(
          `Messages have been received from the ${topic}: ${message.body}`
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
  } catch (error) {
    console.error(error)
  } finally {
    await receiver.close()
    await sbClient.close()
  }
}

const restartReceiver = async () => {
  try {
    await receiver.close()
    receiver = null
    console.log('Receiver closed. Restarting...')
    await receiveFromTopic()
  } catch (error) {
    console.error('Error occurred while restarting receiver:', error)
  } finally {
    await receiver.close()
    await sbClient.close()
  }
}

module.exports = receiveFromTopic
