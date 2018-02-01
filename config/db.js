const config = require('./config');

const URL_FROM_CONFIG = config.URL; // it's OK

function connect() {
    console.log('Connecting to ', config.URL);
    console.log('DB_VERSION in config is ', config.DB_VERSION);
}

exports.VERSION = 1;
exports.URL_FROM_CONFIG = URL_FROM_CONFIG;
exports.connect = connect;