# Passport Data Subscriber
Simple Node.js application for receiving messages from a Service Bus topic.
This repo is 3 of 3 that was created based on a [Service Bus exercise](https://github.com/rtasalem/passport-data-sender/blob/main/docs/node-asb-exercise.png):
1. [passport-data-sender](https://github.com/rtasalem/passport-data-sender)
2. [passport-data-receiver](https://github.com/rtasalem/passport-data-receiver)
3. [passport-data-subscriber](https://github.com/rtasalem/passport-data-subscriber)
## Documentation
Refer to the [documentation](https://github.com/rtasalem/passport-data-subscriber/blob/main/docs/DOCS.md) for detailed notes on development. Note that messages were sent to a queue via application 1. Those same messages where then received by application 2 and sent to a topic. This application (application 3) will receive the same messages again, but this time from the topic rather than directly from the queue before sending them to another topic.
## Getting Started
Run the following command to send messages to the Service Bus queue:
```
cd app && node index
```
