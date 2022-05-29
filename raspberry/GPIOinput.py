import RPi.GPIO as GPIO
GPIO.setmode(GPIO.BOARD)
inPin=40
GPIO.setup(inPin,GPIO.IN)
from time import sleep
try:
	while True:
		readVal=GPIO.input(inPin)
		print(readVal)
		sleep(1)
except KeyBoardInterrupt:
		GPIO.cleanup()