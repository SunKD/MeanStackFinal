const c = require('../controllers/controller')();
const path = require('path');

module.exports = (app) =>{
    app.get('/pets', function(req, res){
        c.readAll(req, res);
    })

    app.get('/pets/:id', function(req, res){
        c.readOne(req, res);
    })

    app.post('/pets', function(req, res){
        c.create(req, res);
    })

    app.put('/pets/:id', function(req, res){
        c.update(req, res);
    })

    app.post('/pet/:id', function (req, res) {
        c.updateLike(req, res);
    });

    app.delete('/pets/:id', function(req, res){
        c.delete(req, res)
    })

    app.all("*", (req, res, next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
    });
}