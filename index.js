var request = require('sync-request');


function bnwrequire(postID) {
	var res = request('GET', 'https://bnw.im/api/show?message=' + postID);
	return eval(JSON.parse(res.getBody('utf8')).messages[0].text);
}

module.exports = bnwrequire;
