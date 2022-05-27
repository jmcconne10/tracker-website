import json
import boto3
from decimal import Decimal
import datetime
import dateutil


def lambda_handler(event, context):
    
    date_format='%m/%d/%Y %H:%M:%S'
    date_format_short='%m/%d/%Y '
    #connect to dynamoDB table and scan in
    dynamodb = boto3.resource('dynamodb')
    table = dynamodb.Table('medicineDB')
    
    response = table.scan()
    
    item = response['Items']
    
    name=event['queryStringParameters']['name']
    
    central = dateutil.tz.gettz('US/Central')
    now = datetime.datetime.now(tz=central).strftime(date_format)


    try:
        table.update_item(
            Key={
                    'patient':name
                },
            UpdateExpression="set taken = :g",  #This is what does the update, 
            ExpressionAttributeValues={         #This is just used to define the variables, which are used above
                    ':g': now
                },
            ConditionExpression='attribute_exists(taken)',
            ReturnValues="UPDATED_NEW"
            )
    except:
        print("User doesn't exist")
        
    return {
        "statusCode": 200,
        "body": json.dumps(name)
        }
   