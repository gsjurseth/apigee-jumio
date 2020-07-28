var cacheCheck = context.getVariable('nonce') || "false";

if (cacheCheck) {
    var parsed = JSON.parse(cacheCheck);
    var id = parsed.id;
    var idType = parsed.idType;
    var isValid = "true";
    context.setVariable('id', id );    
    context.setVariable('idType', idType );    
}
else {
    var isValid = "false";
}

//var valid = cacheCheck == "true" ? "true" : "false";

context.setVariable('isValid',isValid);