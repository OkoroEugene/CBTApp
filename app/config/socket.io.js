const express = require('express');
const app = express();
const server = app.listen(process.env.PORT || 5000);
var sharedsession = require("express-socket.io-session");
var io = require('socket.io').listen(server);
io.use(sharedsession(session, {
    autoSave: true,
}));

var allConnectedUsers = [];
io.on('connection', function (socket) {
    var userId;
    if (socket.handshake.session.passport)
        if (socket.handshake.session.passport.user)
            userId = socket.handshake.session.passport.user;

    socket.join(userId); // We are using room of socket io

    var currentCount = 0;
    socket.on('notify', function (caseId, userId, sendername, content, allData) {
        currentCount = currentCount + 1;
        getChatParticipants(caseId, userId, sendername, content, allData, function (data) {
            var result = {
                'count': data.length,
                'content': data
            }
            // io.sockets.emit('notifyCount', result);
        });
    });
});