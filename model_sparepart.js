var dbConn = require("./db");

var Sparepart = function (sparepart) {
    this.id_motor = sparepart.id_motor;
    this.name = sparepart.name;
    this.jumlah_stok = sparepart.jumlah_stok;
    this.harga = sparepart.harga;
};

Sparepart.create = function (newSparepart, result) {
    dbConn.query(
        'INSERT INTO sparepart (id_motor, name, jumlah_stok, harga) VALUES (?,?,?,?)',
        [
            newSparepart.id_motor,
            newSparepart.name,
            newSparepart.jumlah_stok,
            newSparepart.harga,
        ],
        function (err, res) {
            if (err) {
                console.log("error: ", err);
                result(err, null);
            } else {
                console.log(res.insertId);
                result(null, res.insertId);
            }
        }
    );
};

Sparepart.findAll = function (result) {
    dbConn.query(
        'SELECT * FROM sparepart',
        function (err, res) {
            if (err) {
                console.log("error: ", err);
                result(err, null);
            } else {
                console.log(res);
                result(null, res);
            }
        }
    );
};

Sparepart.findById = function (id, result) {
    dbConn.query(
        'SELECT * FROM sparepart WHERE id = ?', id,
        function (err, res) {
            if (err) {
                console.log("error: ", err);
                result(err, null);
            } else {
                console.log(res);
                result(null, res);
            }
        }
    );
};

Sparepart.update = function (id, sparepart, result) {
    dbConn.query(
        'UPDATE sparepart SET name = ?, jumlah_stok = ?, harga = ? WHERE id = ?', 
        [sparepart.name, sparepart.jumlah_stok, sparepart.harga, id],
        function (err, res) {
            if (err) {
                console.log("error: ", err);
                result(err, null);
            } else {
                console.log(res);
                result(null, res);
            }
        }
    );
};

Sparepart.delete = function (id, result) {
    dbConn.query(
        'DELETE FROM sparepart WHERE id = ?', id,
        function (err, res) {
            if (err) {
                console.log("error: ", err);
                result(err, null);
            } else {
                console.log(res);
                result(null, res);
            }
        }
    );
};


module.exports = Sparepart;
