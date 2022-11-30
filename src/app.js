const app = require('./db/connect');
const config = require('./config');

app.listen(config.port);
