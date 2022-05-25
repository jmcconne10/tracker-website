aws dynamodb query \
    --table-name medicineDB \
    --key-condition-expression "patient = :name" \
    --expression-attribute-values  '{":name":{"S":"Brendan"}}'