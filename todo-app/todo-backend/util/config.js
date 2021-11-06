const MONGO_URL = process.env.MONGO_URL || undefined;
const REDIS_URL = process.env.REDIS_URL || undefined;
/*
  MONGO_URL=mongodb://the_username:complex-example@localhost:3456/the_database
  REDIS_URL=//localhost:5001
*/
module.exports = {
  MONGO_URL,
  REDIS_URL,
};
