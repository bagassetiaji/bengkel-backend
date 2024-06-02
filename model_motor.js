const dbConn = require("./db");

var Motor = function (motor) {
    this.type_motor = motor.type_motor;
    this.nama_motor = motor.nama_motor;
};

Motor.create = function (newMotor, result) {
    dbConn.query(
        'INSERT INTO motor (type_motor, nama_motor) VALUES (?,?)',
        [newMotor.type_motor, newMotor.nama_motor],
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

Motor.findAll = function (result) {
    dbConn.query('SELECT * FROM motor', function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log(res);
            result(null, res);
        }
    });
};

Motor.findById = function (id, result) {
    dbConn.query('SELECT * FROM motor WHERE id = ?', id, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log(res);
            result(null, res);
        }
    });
};

Motor.update = function (id, motor, result) {
    dbConn.query(
        'UPDATE motor SET type_motor = ?, nama_motor = ? WHERE id = ?', 
        [motor.type_motor, motor.nama_motor, id],
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

Motor.delete = function (id, result) {
    dbConn.query('DELETE FROM motor WHERE id = ?', id, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log(res);
            result(null, res);
        }
    });
};


module.exports = Motor;
