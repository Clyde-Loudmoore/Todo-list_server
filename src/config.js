const dotenv = require('dotenv');
const fs = require('fs');

const localConfig = dotenv.parse(fs.readFileSync('default.env'));
const defaultConfig = dotenv.parse(fs.readFileSync('.env'));

const mainConfig = {
  ...localConfig,
  ...defaultConfig,
};

const config = {
  port: mainConfig.DEV_PORT,
  clientUrl: mainConfig.CLIENT_URL,
  mongoUrl: mainConfig.MONGO_URL,
};

module.exports = config;
