var check = require('./lib/check.js');

console.log("Sanitized input:" + check.email("yOLOOOOO@gmail.com"));
console.log("Sanitized input:" + check.name("Ved petkarDDDF pdf12 "));
