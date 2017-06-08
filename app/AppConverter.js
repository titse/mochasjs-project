/** 
AppConverter.js
Description: convert rgb colors to strings
Modules being used: chai, mocha
Author Tiffany Tse
*/
"use strict";
//create a function called rgbToHex to take in rgb values to convert to strings
exports.rgbToHex = function(red, green, blue) {
    //hex have 16 characters
    var redHex = red.toString(16);
    var greenHex = green.toString(16);
    var blueHex = blue.toString(16);
    
    //return hex colors 
    return pad(redHex) + pad(greenHex) + pad(blueHex);

};
function pad(hex) {
    return (hex.length === 1 ? "0" + hex : hex);
}

exports.hexToRgb = function(hex) {
    //convert parts of the string into valud deccimal RGB values
    var red     = parseInt(hex.substring(0, 2), 16);
    var green   = parseInt(hex.substring(2, 4), 16);
    var blue    = parseInt(hex.substring(4, 6), 16);
    //return the red, blue, green colors
    return [red, green, blue];
};
