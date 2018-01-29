//
// Copyright (c) 2017 Cisco Systems
// Licensed under the MIT License 
//

/*
 * Structure of an response
 * 
 * {
    "code": 200,
    "lang": "en-es",
    "text": [
        "hola"
    ]
}
 */

var request = require("request");


module.exports.translate = function (lang, text, callback) {

    // translate the text using yandex api
    var options = {
        method: 'GET',
        url: "https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20180122T084853Z.68c06e476a949b43.9040970f23ad6381ff3424a0322ae08b6fb87afc&text="+text+"&lang="+lang
        };

    request(options, function (error, response, body) {
        if (error) {
            console.log("could not translate the text, error: " + error);
            return;
        }

        if ((response < 200) || (response > 299)) {
            console.log("could not translate the text, response: " + response);
            return;
        }

        var body = JSON.parse(body);
        if(body.text.length > 0){
        callback(null, body.text[0]);}
        else{
            callback(null, "could not translate the text");
        }
    });
}