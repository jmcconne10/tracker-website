# medicine
App to track when someone take their medicine and sends alerts when it doesn't happen

takeMedicine-API has the hello resource, which kicks off
takeMedincide Lambda function, which updates
medicineDB dynamoDB with time when medicine is taken
checkMedicine will go off regularly to check for recently taken medicine
