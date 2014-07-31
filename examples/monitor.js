var router = require('../index');
var fs = require('fs');

var txt = fs.readFileSync('checked.txt', 'utf-8');
nameServerList = txt.split("\n");


var dns = router.createServer( nameServerList);

//dns.route('example.com', '127.0.0.1');

dns.on('resolve', function(domain) {
	console.log('wanna resolve ' + domain);
});

dns.listen();
