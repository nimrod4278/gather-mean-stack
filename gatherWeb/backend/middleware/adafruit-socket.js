const host = 'https://io.adafruit.com/';
const username = "gather1122" //process.env.ADAFRUIT_USER; // mqtt credentials if these are needed to connect
const password = "aio_UNqL67055VEEiNZQaFlALTKsgSbV" //process.env.ADAFRUIT_PASS;
const socket = require('socket.io-client')(`https://io.adafruit.com/api/v2/${username}/feeds/finish?x-aio-key=${password}`);

socket.on('connect', function(){
    console.log('Connection successful: ', host);
});
socket.on('event', function(data){
    console.log(data);
});
socket.on('disconnect', function(){
    console.log('disconnected from: ', host);
});

socket.connect()