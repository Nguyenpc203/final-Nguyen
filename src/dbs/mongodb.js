const mongoose = require('mongoose');

class Mongo {
    constructor() {
        this._connect();
    }

    _connect() {
        mongoose.connect('mongodb+srv://admin:admin@nguyenpc203.hyyxbvj.mongodb.net/shopper', {
        })
            .then(() => {
                console.log('Database connection successfully');
            })
            .catch(err => {
                console.error('Database connection error');
            })
    }
}

module.exports = new Mongo();
