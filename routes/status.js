var router = require('./router');
var filebotService = require('../services/filebotService');

/**
 GET /api/status/filebot
*/
router.get('/filebot', function(req, res) {
  var status = filebotService.getFilebotInfo();
  filebotService.testCommand();
  res.json(status);
});

module.exports = router;
