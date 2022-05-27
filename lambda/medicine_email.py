import json
from datetime import datetime
import boto3
from botocore.exceptions import ClientError

def lambda_handler(event, context):
    # TODO implement
    recipient="joe.mcconnell10@gmail.com" #edit your email here
    timestamp = str(datetime.now())
    print(timestamp)
    send(timestamp,recipient)
    return {
    'statusCode': 200,
    'body': json.dumps('Email sent from Lambda!')
    }

def send(message, RECIPIENT):
    AWS_REGION = "us-east-1"
    SENDER=RECIPIENT
    CHARSET = "UTF-8"
    SUBJECT = "NerdyElectronics - Test Lambda with SES"
    # Create a new SES resource and specify a region.
    client = boto3.client('ses',region_name=AWS_REGION)

    # Try to send the email.
    try:
        #Provide the contents of the email.
        response = client.send_email(
             Destination={
                   'ToAddresses': [
                             RECIPIENT,
                         ],
                        },
             Message={
                  'Body': {
                      'Html': {
                         'Charset': CHARSET,
                          'Data': message,
                         },
                      'Text': {
                         'Charset': CHARSET,
                         'Data': message,
                         },
                      },
                     'Subject': {
                         'Charset': CHARSET,
                         'Data': SUBJECT,
                        },
                     },
             Source=SENDER,
          )
    # Display an error if something goes wrong.
    except ClientError as e:
        print(e.response['Error']['Message'])
    else:
        print("Email sent! Message ID:"),
        print(response['MessageId'])