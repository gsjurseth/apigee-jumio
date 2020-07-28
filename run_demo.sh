#!/bin/bash

URL=$(curl -H "content-type: application/json" https://gateway.dev.ilabank.com/v1/jumio/start -d '{ "id" : "012345678", "idType": "NationalID"  }' | jq ' .redirectURL' | sed -e 's/"//g')

xdg-open $URL

clear 
echo "Pause and complete login. When it's done please enter the transaction ID: "
read tid

clear

echo "And now we'll fetch a token using that transaction id"

#echo "running: curl -H "content-type: application/json" https://gateway.dev.ilabank.com/v1/jumio/token -d \"{ \"transactionReference\": \"$tid\"   }\""

TOKEN=$(curl -H "content-type: application/json" https://gateway.dev.ilabank.com/v1/jumio/token -d "{ \"transactionReference\": \"$tid\"  }" | jq ' .token' | sed -e 's/"//g')

echo "And our token is: '${TOKEN}'"

read pause
clear

echo "And let's decode that token"

jwt $TOKEN

echo "And when ready we'll go ahead and fetch our account info using this token"
read blah

curl -H "content-type: application/json" -H "Authorization: Bearer $TOKEN" https://gateway.dev.ilabank.com/v1/mockaccountoverview | jq .
