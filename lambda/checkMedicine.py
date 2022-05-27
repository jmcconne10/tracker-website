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
    
    items = response['Items']

    
    #attempting to convert list to json
    for item in items:
        taken = (item['taken'])
        datetimeobj=datetime.datetime.strptime(taken, date_format)
        central = dateutil.tz.gettz('US/Central')
        now = datetime.datetime.now(tz=central).strftime(date_format_short)
        now = datetime.datetime.strptime(now, date_format_short)
        
        delta = now - datetimeobj
        #print(now)
        
        if now > datetimeobj:
            print(item['patient'] + " is overdue")
        else:
            print(item['patient'] + " is good")
    