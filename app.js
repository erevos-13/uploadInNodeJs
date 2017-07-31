var express = require('express'),
    app = express(),
    http = require('http').Server(app).listen(8080),
    upload = require('express-fileupload'),
    uploadModules = require('./uploadModule/upload');

app.use(upload());
app.use('/assets', express.static(__dirname + '/public'));
app.set('view engine', 'ejs');


app.get('/',function (req,res) {

    res.render('index');
});
app.post('/fileUpload',function (req,res) {
    var fileFromAction = req.files.fileToUpload;
    var url = 'upload/';
    //var renderOn = 'index'
    /*
    This is the module i make with the express-fileupload
    you can see in the folder uploadModule is Simple.
    */
    uploadModules.upload(req, res, fileFromAction ,url);

});