module.exports = function (app) {
  //TODO: Check how to the routes are matched (order)
    app.use('/', require('./general'));
    app.use('/api/status', require('./status'));
    app.use('/api/jobs', require('./jobApi'));
};
