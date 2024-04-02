# Documentation
## Prerequisites
- Service Bus created on Azure portal. For this application, at least one topic must exist within the Service Bus.
## Receiving Messages from a Service Bus Topic
The method for receiving messages from a Service Bus topic is similar to what was implemented in the [passport-data-receiver](https://github.com/rtasalem/passport-data-receiver) application (i.e. application 2):
- Create a `ServiceBusClient` instance.
- Create a receiver by calling the `createReceiver` method on the `ServiceBusInstance`.
- Define methods to handle a message and an error (`handleMessage` and `handleError` respectively).
- Subscribe to the receiver by calling the `subscribe` method on the receiver. Like in application 2, the `subscribe` method takes an object as an argument and in this object two properties need to be defined: `processMessage` and `processError`. These should be defined using `handleMessage` and `handleError` respectively.
- Lastly, close both the receiver and the Service Bus client.
## Sending Messages Received from a Topic to another Topic
- To send messages to another topic after they have been received from the original topic, a sender will need to be created using the name of the newly created Service Bus topic itself. The `sendMessages` method can then be called on the sender, passing through the `message.body` to be sent to the topic.
## Environment Variables
The `.env` file for this app contains the following:
```
ASB_CONN_STR=
ASB_TOPIC_RECEIVER=
ASB_SUB_RECEIVER=
ASB_TOPIC_SENDER=
ASB_SUB_SENDER=p
```
Note that the `ASB_TOPIC_SENDER` and the `ASB_SUB_SENDER` variables are optional and a second topic/subscription only needs to be created if you wish to send the received messages to another topic.