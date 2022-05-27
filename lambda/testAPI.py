import json

#this is as simple as I could make a Lambda function to work with API.
#the event is json that comes in as output
#parameter for this is name
#add ?name="Joe" to get this to work

def lambda_handler(event, context):
    # TODO implement
    
    
    print(event)
    print(event['queryStringParameters']['name'])
    name=event['queryStringParameters']['name']
    
    return {
        "statusCode": 200,
        "body": json.dumps(name)
        }