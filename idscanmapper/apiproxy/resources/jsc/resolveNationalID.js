var id = context.getVariable('id');
var idType = context.getVariable('idType');

var mapper = {
    "NationalID": {
        "543219876": "49fe3583-dd3e-4363-89f6-a4b37df65edb",
        "012345678": "84210a8e-bd66-4749-8c5e-8dd686943d3f",
        "876543210": "61a09356-a1b1-480a-8521-1cf3974c844f",
        "987612345": "9a9b3ed3-24f4-47a6-99a0-9fb5a711d9c9",
        "012348765": "0fa18b9b-87a3-4763-b9ff-fd9993c27229",
        "081726354": "cb0612a4-daa0-42e7-950c-c370bbfbc1bb",
        "112233445": "f043e5d2-2a67-4bfe-9455-cca959716e88"
        
    },
    "Passport": {
        "543219876": "49fe3583-dd3e-4363-89f6-a4b37df65edb",
        "012345678": "84210a8e-bd66-4749-8c5e-8dd686943d3f",
        "NL1234567": "61a09356-a1b1-480a-8521-1cf3974c844f",
        "987612345": "9a9b3ed3-24f4-47a6-99a0-9fb5a711d9c9",
        "012348765": "0fa18b9b-87a3-4763-b9ff-fd9993c27229",
        "081726354": "cb0612a4-daa0-42e7-950c-c370bbfbc1bb",
        "112233445": "f043e5d2-2a67-4bfe-9455-cca959716e88"
    }
};

context.setVariable("scanID", mapper[idType][id]);