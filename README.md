# knative-nodeapp
NodeApp for deploying to kubernetes as FaaS using knative framework and Tekton Triggers

## Execution Flow
 - Request will be send to Route handler at: POST / with payload.
 - Payload will be forwarded to function handler similar to AWS Lambda to carry out processing.
 - Handler will return the response to Route handler.
 - Route handler will send the Response to invoker.

## Payload Format
``` json
  {
    "Payload": "{'useremail': 'abc@gmail.com'}"
  }
```

> You can pass any custom data within the Payload property to customised your invoking or calling some particular module based on payload.
