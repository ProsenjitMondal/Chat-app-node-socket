// Jan 1st 1970 00:00:00 am
const moment = require('moment');


// var date = new Date();
// console.log(date.getMonth());

// var date = moment();
// date.add(1, 'years').subtract(2, 'months');

// console.log(date.format('MMM Do YYYY HH:mm:ss a'));

// console.log(date.format('h:mm a'));

var someTimestamp = moment().valueOf();
console.log(someTimestamp);

var createdAt = 1234;
var date = moment(createdAt);
console.log(date.format('h:mm a'));