'use strict';

var https = require('https')

var printName = function(person){
	return `${person.last}, ${person.first}`
};

var loadWiki = function(person, callback) {
	var url = `https://en.wikipedia.org/wiki/${person.first}_${person.last}`
	https.get(url, (res) => {
		var body = ""
		res.setEncoding("UTF-8")
		res.on('data', (chunk) => {
			body += chunk
		})
		res.on('end', () => {
			callback(body)
		})
	})
};

module.exports.printName = printName;
module.exports.loadWiki = loadWiki;