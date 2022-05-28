//  current day and time using moment.js

var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));

var time = moment().format("hh:mm:ss");
$("#time-display").text(time);




