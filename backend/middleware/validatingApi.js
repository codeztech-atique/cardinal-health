exports.validateApi = (req, res, next) => {
    var errText = '';
    if(req.body.destination === '' || req.body.destination === undefined) {
        errText += 'Destination Address, ';
    } if(req.body.textMessage === '' || req.body.textMessage === undefined) {
        errText += 'Message body, ';
    }

    if(errText !== '') {
        errText += ' is required !!!'
        isStatus = false;
        res.status(400).send({
            message: errText
        });
    } else {
        next();
    }
}