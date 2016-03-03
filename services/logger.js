var SimpleNodeLogger = require('simple-node-logger');
var opts = {
		logFilePath:'/tmp/tvster.log',
		timestampFormat:'YYYY-MM-DD HH:mm:ss.SSS'
	};
var log = SimpleNodeLogger.createSimpleLogger(opts);
log.setLevel('debug');
module.exports = log;