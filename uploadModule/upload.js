

module.exports= {
    upload : upload

};

    function upload(req, res, fileFromAction, url, renderOn) {

        if (req.files) {
            //file =req.files.fileToUpload;
            file = fileFromAction;
            filename = file.name;
            file.mv(url + filename, function (err) {
                if (err) {
                    console.log(err);
                    console.log('error occurred');
                } else {
                    console.log('Done');
                    if (renderOn){
                        res.render(renderOn);
                    }else {
                        res.redirect('/');
                    }


                }

            });
        } else {
            res.send('You do not set the file.');
        }
    }



