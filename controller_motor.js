const Motor = require('./model_motor');

exports.findAll = function(req, res) {
    Motor.findAll(function(err, motor) {
        if (err) res.send(err);
        res.send(motor);
    });
};

exports.create = function(req, res) {
    const new_motor = new Motor(req.body);

    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required fields' });
    } else {
        Motor.create(new_motor, function(err, motor) {
            if (err) res.send(err);
            res.json({
                error: false,
                message: "Motor added successfully",
                data: motor
            });
        });
    }
};

exports.findById = function(req, res) {
    Motor.findById(req.params.id, function(err, motor) {
        if (err) res.send(err);
        res.json(motor);
    });
};

exports.update = function(req, res) {
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required fields' });
    } else {
        Motor.update(req.params.id, new Motor(req.body), function(err) {
            if (err) res.send(err);
            res.json({ error: false, message: 'Motor updated successfully' });
        });
    }
};

exports.delete = function(req, res) {
    Motor.delete(req.params.id, function(err) {
        if (err) res.send(err);
        res.json({ error: false, message: 'Motor deleted successfully' });
    });
};

