//  current day and time 

var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));

var time = moment().format("hh:mm:ss");
$("#time-display").text(time);




// import moment from 'moment';
// var today = moment();

// console.log(today)