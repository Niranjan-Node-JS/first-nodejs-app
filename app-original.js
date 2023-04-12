
// const logger = require('./logger');


// logger.log('message');

// function sayHello(name){
// console.log('Hello ', name);
// }

// sayHello('Chintoo');

//==================================
// const path = require('path');

// var pathobj = path.parse(__filename);

// console.log(pathobj);

//======================================

// const os = require('os');

// var totalMemory = os.totalmem();
// var freeMemory = os.freemem();

// console.log('Used Memory of the System: ' + (totalMemory - freeMemory));

// console.log(`Total Memory: ${totalMemory} and the Free Memory: ${freeMemory}`);

//================================

// const fs = require('fs');

// //const files = fs.readdirSync('./');
// //console.log(files);

// const files = fs.readdir('./', function(err, files) {
//     if(err) console.log('Error', err);
//     else console.log('Result ', files);
// });


//=======================================
// //EVENTS

// const EventEmitter = require('events');
// const emitter = new EventEmitter();

// //Register a Listener
// // emitter.on('messageLogged', function(arg){
// //     console.log('Listener Called', arg);
// // });

// //  The Above function with ARROW Funciton in EC6
// emitter.on('messageLogged', (arg) => {
//     console.log('Listener Called', arg);
// });


// //Raise an event
// emitter.emit('messageLogged', { id: 1, url: 'http://localhost/'});

// //Raise: logging (data: message)

//===============================================

// HTTP REST
const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.write('Hello Chintoo Baby. How is Chintee Papa?');
        res.end();
    }

    if(req.url === '/api/v1/courses'){
        res.write(JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9]));
        res.end();
    }

    if(req.url === '/api/v1/colors'){
        res.write(JSON.stringify([
            {
                color: "red",
                value: "#f00"
            },
            {
                color: "green",
                value: "#0f0"
            },
            {
                color: "blue",
                value: "#00f"
            },
            {
                color: "cyan",
                value: "#0ff"
            },
            {
                color: "magenta",
                value: "#f0f"
            },
            {
                color: "yellow",
                value: "#ff0"
            },
            {
                color: "black",
                value: "#000"
            }
        ]));
        res.end();
    }

    if(req.url === '/api/v1/donuts'){
        res.write(JSON.stringify([
            {
                "id": "0001",
                "type": "donut",
                "name": "Cake",
                "ppu": 0.55,
                "batters":
                    {
                        "batter":
                            [
                                { "id": "1001", "type": "Regular" },
                                { "id": "1002", "type": "Chocolate" },
                                { "id": "1003", "type": "Blueberry" },
                                { "id": "1004", "type": "Devil's Food" }
                            ]
                    },
                "topping":
                    [
                        { "id": "5001", "type": "None" },
                        { "id": "5002", "type": "Glazed" },
                        { "id": "5005", "type": "Sugar" },
                        { "id": "5007", "type": "Powdered Sugar" },
                        { "id": "5006", "type": "Chocolate with Sprinkles" },
                        { "id": "5003", "type": "Chocolate" },
                        { "id": "5004", "type": "Maple" }
                    ]
            },
            {
                "id": "0002",
                "type": "donut",
                "name": "Raised",
                "ppu": 0.55,
                "batters":
                    {
                        "batter":
                            [
                                { "id": "1001", "type": "Regular" }
                            ]
                    },
                "topping":
                    [
                        { "id": "5001", "type": "None" },
                        { "id": "5002", "type": "Glazed" },
                        { "id": "5005", "type": "Sugar" },
                        { "id": "5003", "type": "Chocolate" },
                        { "id": "5004", "type": "Maple" }
                    ]
            },
            {
                "id": "0003",
                "type": "donut",
                "name": "Old Fashioned",
                "ppu": 0.55,
                "batters":
                    {
                        "batter":
                            [
                                { "id": "1001", "type": "Regular" },
                                { "id": "1002", "type": "Chocolate" }
                            ]
                    },
                "topping":
                    [
                        { "id": "5001", "type": "None" },
                        { "id": "5002", "type": "Glazed" },
                        { "id": "5003", "type": "Chocolate" },
                        { "id": "5004", "type": "Maple" }
                    ]
            }
        ]));
        res.end();
    }
});

// server.on('connection', (socket) => {
//     console.log('New Connection...');
// });
server.listen(8880);

console.log('Listening on port 8880...');






