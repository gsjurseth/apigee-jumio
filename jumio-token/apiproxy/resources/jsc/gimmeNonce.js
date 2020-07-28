var scanID = context.getVariable('scanID');
var id = context.getVariable('id');
var idType = context.getVariable('idType');

var nonce = "";
nonce = generateUUID();

function generateUUID(){
    var d = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (d + Math.random()*16)%16 | 0;
        d = Math.floor(d/16);
        return (c=='x' ? r : (r&0x7|0x8)).toString(16);
    });
    return uuid;
}


var body = {
    "enrollmentTransactionReference": scanID,
    "callbackUrl": "https://gateway.sit.ilabank.com/v1/jumio/callback",
    "successUrl": "https://gateway.sit.ilabank.com/v1/jumio/success",
    "errorUrl": "https://gateway.sit.ilabank.com/v1/jumio/error",
    "locale": "en"
};

//    "userReference": "geir123",

var nonce = {
    "nonce": true,
    "id": id,
    "idType": idType
}

context.setVariable("target.copy.pathsuffix", false);
context.setVariable("nonceValue", JSON.stringify(nonce));
context.setVariable("nonce", nonce);
context.setVariable("SCBody",JSON.stringify(body));