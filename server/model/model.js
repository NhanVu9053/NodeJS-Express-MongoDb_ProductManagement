const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    bookName:{
        type: String,
        required: true
    },
    author:{
        type: String,
        required: true
    },
    status: String
})

const QuanLySanPhamDb = mongoose.model('quanlysanphamdb',schema);

module.exports = QuanLySanPhamDb;