"use strict";
exports.__esModule = true;
require("./Objects/Message");
// Define message
var msg = new Message("Hello", "World");
// Instanciate message object
//
// Show Message
console.log("first part:" + msg.getFirstPart() + "/n" +
    "second part:" + msg.getSecondPart() + "/n" +
    msg.getFullMessage());
