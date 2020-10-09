//moment.js
var timeNow = moment().format("H"); //24h clock
var dateNow = moment().format("MMMM Do YYYY, h:mm:ss"); //rn says 'moment' is undefined
console.log("timeNow:", timeNow);

//display dateNow
$("#currentDay").html(dateNow);

//calender time variables
var allTimes = {
  "9h00": "",
  "10h00": "",
  "11h00": "",
  "12h00": "",
  "13h00": "",
  "14h00": "",
  "15h00": "",
  "16h00": "",
  "17h00": "",
};

//onclick to local storage functions - will stay displayed ?
//way to make less repetative ?
$(".b9").on("click", function () {
  var entertext = $(".e9").val();
  localStorage.setItem("9h00", entertext);
});
$(".b10").on("click", function () {
  var entertext = $(".e19").val();
  localStorage.setItem("10h00", entertext);
});
$(".b11").on("click", function () {
  var entertext = $(".e11").val();
  localStorage.setItem("11h00", entertext);
});
$(".b12").on("click", function () {
  var entertext = $(".e12").val();
  localStorage.setItem("12h00", entertext);
});
$(".b13").on("click", function () {
  var entertext = $(".e13").val();
  localStorage.setItem("13h00", entertext);
});
$(".b14").on("click", function () {
  var entertext = $(".e14").val();
  localStorage.setItem("14h00", entertext);
});
$(".b15").on("click", function () {
  var entertext = $(".e15").val();
  localStorage.setItem("15h00", entertext);
});
$(".b16").on("click", function () {
  var entertext = $(".e16").val();
  localStorage.setItem("16h00", entertext);
});
$(".b17").on("click", function () {
  var entertext = $(".e17").val();
  localStorage.setItem("17h00", entertext);
});

//function to change color of section based on time
function changeColor() {
  for (i = 0; i < allTimes.length; i++)
    if (timeNow > dateNow) {
      //past
      timeNow[i].add("past");
      timeNow[i].remove("present");
      timeNow[i].remove("future");
    } else if (timeNow === dateNow) {
      //present
      timeNow[i].add("present");
      timeNow[i].remove("past");
      timeNow[i].remove("future");
    } else if (timeNow < dateNow) {
      //futur
      timeNow[i].add("future");
      timeNow[i].remove("past");
      timeNow[i].remove("present");
    }
}

//invoking functions (is this smth i need to do ? no clue)
changeColor();
saveBtn();
