import json

#this is as simple as I could make a Lambda function to work with API.
#the event is json that comes in as output
#adding something like ?name="Joe" at the end of URL will put populate the event

def lambda_handler(event, context):
    # TODO implement
    
    print(event)
    
    return {
        "statusCode": 200,
        "body": json.dumps(event)
        }
