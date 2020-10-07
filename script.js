var dateNow = moment().format("MMMM Do YYYY, h:mm:ss");
var hourNow = moment().format("H");
var saveBtn = $(".button");
var nine = $("#nine").val(9);
var ten = $("#ten").val(10);
var eleven = $("#eleven").val(11);
var twelve = $("#twelve").val(12);
var thirteen = $("#thirteen").val(13);
var fourteen = $("#fourteen").val(14);
var fifteen = $("#fifteen").val(15);
var sixteen = $("#sixteen").val(16);
var seventeen = $("#seventeen").val(17);

function changeTime() {
  for (i = 0; i < this.length; i++)
    //past
    //if hourNow > dateNow
    this[i].add("past");
  this[i].remove("present");
  this[i].remove("future");
  //present
  //if hourNow === dateNow
  this[i].add("present");
  this[i].remove("past");
  this[i].remove("future");
  //future
  //if hourNow < dateNow
  this[i].add("future");
  this[i].remove("past");
  this[i].remove("present");
}

function saveBtn() {
  localStorage.setItem;
  //use this ?
}

//display current date and time using moment.js
//for loop color-coding for past present future
//onclick time block to enter it
//onclick save button to save it
//data saved in local storage
//data isn't reset after refresh
