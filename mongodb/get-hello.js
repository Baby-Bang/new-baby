const MongoClient = require('mongodb').MongoClient;
const DB_CONN_STR = 'mongodb://localhost:27017/BabyUser';

const getHello = (req, res) => {
  MongoClient.connect(DB_CONN_STR, (err, db)=> {
    const collection = db.collection('hello');
    collection.find().toArray(function (err, docs) {
      res.json(docs);
    });
    db.close();
  });
};

module.exports = {
  getHello
};
