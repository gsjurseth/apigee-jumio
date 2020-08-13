var id = context.getVariable('id');
var idType = context.getVariable('idType');

var mapper = {
    "NationalID" : {
        "543219876": {
            "FirstName": "Sara",
            "LastName": "Mohamed",
            "accountno": 12345678
        },
        "012345678": {
            "FirstName": "Geir",
            "LastName": "Sjurseth", 
            "accountno": 87654321
            
        },
        "876543210": {
            "FirstName": "Rowan",
            "LastName": "de Zeeuw",
            "accountno": 12348765
        },
        "987612345": {
            "FirstName": "ESRA MINWIR MALLOUH",
            "LastName": "ALSHAMMARI",
            "accountno": 87651234
        },
        "081726354": {
            "FirstName": "FAJER MOHAMED ABDULLA MOHAMED MANEA",
            "LastName": "Alkaabi",
            "accountno": 18277777
        },
        "012348765": {
            "FirstName": "MUTAZ WAEL JAMIL",
            "LastName": "ZAKARIA",
            "accountno": 18273645
        },
        "112233445": {
            "FirstName": "YUSUF YAQOOB ALMAS",
            "LastName": "Mubarak",
            "accountno": 77777182
        },
        "960700250": {
            "FirstName": "ALAA QASIM MOHAMED ALI",
            "LastName": "ISMAEEL",
            "accountno": 22334456
        }
    },
    "Passport": {
        "940900548": {
            "FirstName": "Sara",
            "LastName": "Mohamed",
            "accountno": 12345678
        },
        "012345678": {
            "FirstName": "Geir",
            "LastName": "Sjurseth", 
            "accountno": 87654321
            
        },
        "876543210": {
            "FirstName": "Rowan",
            "LastName": "de Zeeuw",
            "accountno": 12348765
        },
        "987612345": {
            "FirstName": "ESRA MINWIR MALLOUH",
            "LastName": "ALSHAMMARI",
            "accountno": 87651234
        },
        "012348765": {
            "FirstName": "MUTAZ WAEL JAMIL",
            "LastName": "ZAKARIA",
            "accountno": 18273645
        },
        "081726354": {
            "FirstName": "FAJER MOHAMED ABDULLA MOHAMED MANEA",
            "LastName": "Alkaabi",
            "accountno": 18277777
        },
        "112233445": {
            "FirstName": "YUSUF YAQOOB ALMAS",
            "LastName": "Mubarak",
            "accountno": 77777182
        },
        "960700250": {
            "FirstName": "ALAA QASIM MOHAMED ALI",
            "LastName": "ISMAEEL",
            "accountno": 22334456
        }
    }
};

context.setVariable("accountInfo", JSON.stringify(mapper[idType][id]));
