const moment = require('moment');

const a = moment([2021, 5, 21]);
const b = moment([2000, 9, 05]);
const res1 = a.diff(b, 'years');
const res2 = a.diff(b, 'days');
const res3 = a.diff(b, 'seconds');
console.log(res1 + " years old");
console.log(res2 + " days ago");
console.log(res3 + " seconds is gone");

