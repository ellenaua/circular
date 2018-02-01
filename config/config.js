const db = require('./db'); // to cause circular dependency

exports.URL = 'http://some-database-url';
exports.DB_VERSION = db.VERSION;

// exports.DB_VERSION will be undefined, because
// (1) this is immediately invoked code
// (2) it's using value from other module "db"
// (3) there's a circular dependency between "config" and "db"
// (4) "db" module initialization is not finished when import of "config" starts