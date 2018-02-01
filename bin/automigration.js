var app = require('../server/server');
var ds = app.datasources.xampp;
ds.autoupdate(null, function(err) {
  if (err) throw err;
  console.log('Finished migration');
  ds.disconnect();
});