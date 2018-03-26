var socket = io();


function scrollToBottom () {
    //selectors
    var messages = $('#messages');
    var newMessage = messages.children('li:last-child')

    //heights
    var clientHeight = messages.prop('clientHeight');
    var scrollTop = messages.prop('scrollTop');
    var scrollheight = messages.prop('scrollHeight');
    var newMessageHeight = newMessage.innerHeight();
    var lastMessageHeight = newMessage.prev().innerHeight();

    if(clientHeight + scrollTop + newMessageHeight + lastMessageHeight >= scrollheight) {
        messages.scrollTop(scrollheight);
    }

}

socket.on('connect', function () {
    console.log('connected to server');

});

socket.on('disconnect', function() {
    console.log('disconnected from server');
})

socket.on('newMessage', function(message) {
    var formatedTime = moment(message.createdAt).format('h:mm a');
    var template = jQuery('#message-template').html();
    var html = Mustache.render(template, {
        text: message.text,
        from: message.from,
        createdAt: formatedTime
    });

    jQuery('#messages').append(html);
    scrollToBottom();
});

socket.on('newLocationMessage', function(message) {
    var formatedTime = moment(message.createdAt).format('h:mm a');
    var template = $("#location-message-template").html()
    var html = Mustache.render(template, {
        url: message.url,
        from: message.from,
        createdAt: formatedTime
    });
    $("#messages").append(html);
    scrollToBottom();
});


jQuery('#message-form').on('click', function (ev) {
    ev.preventDefault();

    var messageTextBox = jQuery('[name=message')

    socket.emit('createMessage', {
        from: 'User',
        text: messageTextBox.val()
    }, function () {
        messageTextBox.val('')
    })
});

var locationButton = jQuery('#send-location');

locationButton.on("click", function () {
    if(!navigator.geolocation) {
        return alert('geolocation not supported by your browser.')
    }

    locationButton.attr('disabled', 'disabled').text('Sending location...')

    navigator.geolocation.getCurrentPosition(function (position) {
        locationButton.removeAttr('disabled').text('Send location...')
        socket.emit('createLocationMessage', {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        })
    }, function () {
        locationButton.removeAttr('disabled');
        alert('Unable to fetch location')
    });

})

