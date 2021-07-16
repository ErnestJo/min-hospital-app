var mongoose = require ('mongoose');


mongoose.Promise = global.Promise;

//change the database with yours
mongoose.connect("mongodb://ernest:ernest@ernestjoseph-shard-00-00.apez8.mongodb.net:27017,ernestjoseph-shard-00-01.apez8.mongodb.net:27017,ernestjoseph-shard-00-02.apez8.mongodb.net:27017/nhc?ssl=true&replicaSet=atlas-14kzw2-shard-0&authSource=admin&retryWrites=true&w=majority");

module.exports = {mongoose};
