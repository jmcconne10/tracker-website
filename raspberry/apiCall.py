import RPi.GPIO as GPIO
import requests

GPIO.setmode(GPIO.BOARD)
inPin=40
GPIO.setup(inPin,GPIO.IN)
from time import sleep

while True:
    readVal=GPIO.input(inPin)
    if readVal==1:
        response = requests.get('https://uvdcg9yrs0.execute-api.us-east-1.amazonaws.com/prod/hello?name=Joe')
        print(response)
        sleep(1)
    else:
        print(readVal)

GPIO.cleanup()pi@octopi:~/python/raspberrybuttons $ cat apiCall.py 
#this will be where I prove we can make an API call from pi

import requests
response = requests.get('https://uvdcg9yrs0.execute-api.us-east-1.amazonaws.com/prod/hello?name=Joe')