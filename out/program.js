"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Objects = require("./Objects/message");
// Define message
var msg = new Objects.Message("Hello", "World");
// Instanciate message object
//
// Show Message
console.log("first part: " + msg.getFirstPart() + " ¦ " +
    "second part: " + msg.getSecondPart() + " ¦ " +
    msg.getFullMessage());
//# sourceMappingURL=program.js.map