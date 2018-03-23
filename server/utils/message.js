var generateMessage = (from, text) => {
    return {
        from,
        text,
        createdAt: new Date().getTime()
    }
};

var generateLocationMessage = (from, lat, lng) => {
    console.log('message')
    return {
        from: from,
        url: `https://www.google.com/maps?q=${lat},${lng}`,
        createdAt: new Date().getTime() 
    }

};


module.exports = {generateMessage, generateLocationMessage};