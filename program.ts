import * as Objects from './Objects/message';
// Define message
let msg = new Objects.Message("Hello","World");

// Instanciate message object

//
// Show Message
console.log(
            "first part: " + msg.getFirstPart()+" ¦ "+
            "second part: " + msg.getSecondPart()+" ¦ "+
            msg.getFullMessage()
            );
