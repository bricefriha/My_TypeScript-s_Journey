"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Message = /** @class */ (function () {
    //Constructor of the 
    function Message(firstPart, secondPart) {
        this.firstPart = firstPart;
        this.secondPart = secondPart;
    }
    //
    //Encapse
    //
    // Getters
    Message.prototype.getFirstPart = function () {
        return this.firstPart;
    };
    Message.prototype.getSecondPart = function () {
        return this.secondPart;
    };
    Message.prototype.getFullMessage = function () {
        return this.firstPart + " " + this.secondPart + " !!!";
    };
    //
    // Setters
    Message.prototype.setFirstPart = function (fp) {
        this.firstPart = fp;
    };
    Message.prototype.setSecondPart = function (sp) {
        this.firstPart = sp;
    };
    return Message;
}());
exports.Message = Message;
//# sourceMappingURL=message.js.map