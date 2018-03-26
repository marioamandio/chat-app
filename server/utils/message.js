const moment = require('moment');

var generateMessage = (from, text) => {
    return {
        from,
        text,
        createdAt: moment().valueOf()
    }
};

var generateLocationMessage = (from, lat, lng) => {
    console.log('message')
    return {
        from: from,
        url: `https://www.google.com/maps?q=${lat},${lng}`,
        createdAt: moment().valueOf() 
    }

};


module.exports = {generateMessage, generateLocationMessage};