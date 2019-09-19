AMFINavs = require('amfinav');
var fs = require('fs');

var cb = function (data) {
    console.log(data);
    console.log(data.funds.length);
    fs.writeFileSync('./../../amfi.json', JSON.stringify(data));
    console.log('Completed');
};

// refresh every 3600 seconds
var amfi1 = new AMFINavs({refreshInterval : 3600});
amfi1.on('dataready', cb);
