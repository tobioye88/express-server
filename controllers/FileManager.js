const express = require('express');
const path = require('path');
const FileManager = express.Router();


FileManager.get( "/:fileName", (req, res) => {
    //return a file
    console.log(req.params.fileName);
    // res.download('uploads/' + req.params.fileName);

    const options = {
        root: path.join(__dirname, '../public', 'imgs'),
        dotfiles: 'deny',
        headers: {
            'x-timestamp': Date.now(),
            'x-sent': true
        }
    }
    res.sendFile(req.params.fileName, options);
});

FileManager.post( "/fileUpload", () => {
    //save a file to upload folder

});

module.exports = FileManager;