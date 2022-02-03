# SQS Redrive demo

_Infrastructure as code framework used_: AWS SAM
_AWS Services used_: AWS Lambda, Amazon SQS

Demo on how to trigger an AWS Lambda with SQS and create a DLQ.

## Summary of the demo

In this demo you will see:

- All the infraestructure needed to trigger a Lambda function using a SQS Queue.
- How to configure the Dead Letter Queue (DLQ) for the SQS queue

This demo is part of a video posted in FooBar Serverless channel.

## Deploy this demo

We will be using AWS SAM and make sure you are running the latest version - at the time of writing, this was 1.37.0 (sam --version).

Deploy the project to the cloud:

```
sam deploy -g # Guided deployments
```

When asked about functions that may not have authorization defined, answer (y)es. The access to those functions will be open to anyone, so keep the app deployed only for the time you need this demo running.

Next times, when you update the code, you can build and deploy with:

```
sam deploy
```

To delete the app:

````
sam delete
```

## Commands used in ths demo

You can check the video to see how to trigger the SQS Redrive of the failed messages. Or you can use the following CLI command to trigger it from the terminal.

````

aws --region eu-west-1 sqs send-message --queue-url <queue-URL> --message-body '{ "value": "message" }'
``

## Links related to this code

- Video with more details: https://youtu.be/bDbOYMsN24w
- Launch blog post: https://aws.amazon.com/blogs/aws/new-dynamodb-table-class-save-up-to-60-in-your-dynamodb-costs/
