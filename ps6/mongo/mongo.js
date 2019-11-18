const MongoClient = require('mongodb').MongoClient;

const mongoURL = 'mongodb://localhost:27017';

let _db;

module.exports = {

    connect: function( callback ) {
        MongoClient.connect( mongoURL,  { useNewUrlParser: true }, function( err, client ) {
            _db  = client.db('weather');
            return callback( err );
        } );
    },
    getDB: () => { return _db; }

}
