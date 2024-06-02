const Sparepart = require("./model_sparepart");

exports.findAll = function(req, res){
    Sparepart.findAll(function(err, sparepart){
        console.log('controller')
        if (err) res.send(err)
        console.log('res', sparepart);
        res.send(sparepart)
    })
}

exports.create = function (req, res) {
    const new_sparepart = new Sparepart(req.body)

    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field'})
    } else {
        Sparepart.create(new_sparepart, function(err, sparepart){
            if (err) res.send(err)
            else
                res.json({
                    error: false,
                    message: "Sparepart added successfully",
                    data: sparepart
                })
        })
    }
}

exports.findById = function (req, res) {
    Sparepart.findById(req.params.id, function(err, sparepart) {
        if (err) res.send(err)
        res.json(sparepart)
    })
}

exports.update = function (req, res) {
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field'})
    } else {
        Sparepart.update(req.params.id, new Sparepart(req.body), function (err){
            console.log(req.body)
            if (err) res.send(err)
            res.json({
                error: false,
                message: 'Sparepart updated successfully'
            })
        })
    }
}

exports.delete = function (req, res) {
    Sparepart.delete(req.params.id, function (err) {
        if (err) res.send(err)
            res.json({
                error: false,
                message: 'Sparepart deleted successfully'                
        })
    })
}
