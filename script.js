//moment.js
var timeNow = moment().hours(); //24h clock
var dateNow = moment().format('MMMM Do YYYY, HH:mm'); //'moment undefined' fixed by moving script.js to bottom
console.log("timeNow:", timeNow);

//display dateNow
$("#currentDay").html(dateNow);
// setTimeout(dateNow, 1000); //have seconds change on screen

//onclick to local storage functions - will stay displayed ?
//way to make less repetative ?
// localstorage.getItem ? // $().text() ? // JSON.stringify ? // JSON.parse(local...) ?
$(".b9").on("click", function () {
  var entertext9 = $(".e9").val();
  localStorage.setItem("9h00", entertext9);
});
$(".b10").on("click", function () {
  var entertext10 = $(".e10").val();
  localStorage.setItem("10h00", entertext10);
});
$(".b11").on("click", function () {
  var entertext11 = $(".e11").val();
  localStorage.setItem("11h00", entertext11);
});
$(".b12").on("click", function () {
  var entertext12 = $(".e12").val();
  localStorage.setItem("12h00", entertext12);
});
$(".b13").on("click", function () {
  var entertext13 = $(".e13").val();
  localStorage.setItem("13h00", entertext13);
});
$(".b14").on("click", function () {
  var entertext14 = $(".e14").val();
  localStorage.setItem("14h00", entertext14);
});
$(".b15").on("click", function () {
  var entertext15 = $(".e15").val();
  localStorage.setItem("15h00", entertext15);
});
$(".b16").on("click", function () {
  var entertext16 = $(".e16").val();
  localStorage.setItem("16h00", entertext16);
});
$(".b17").on("click", function () {
  var entertext17 = $(".e17").val();
  localStorage.setItem("17h00", entertext17);
});

//function to change color of section based on time
function changeColor() {
  console.log('change color');

  //calender time variables
  var allTimes = $('.time-block');

  allTimes.each(function()  {
    var timeBlock = parseInt($(this).attr('id'));
    console.log(timeBlock)
    if (timeNow > timeBlock) {
      //past
      $(this).addClass("past");
      $(this).removeClass("present");
      $(this).removeClass("future");
    } else if (timeNow === timeBlock) {
      //present
      $(this).addClass("present");
      $(this).removeClass("past");
      $(this).removeClass("future");
    } else if (timeNow < timeBlock) {
      //futur
      $(this).addClass("future");
      $(this).removeClass("past");
      $(this).removeClass("present");
    }
  })
}
changeColor();

// function check()  {
//   console.log('time checked');
//   setInterval(check,60000)//runs interval every 10
// }

//setTimeout(function)()  {
//   console.log(this.name + '!');
// }, 100);

// var person = {
//   name: 'hodor',
//   saySomething: function()  {
//     console.log(this.name + ' is thinking...');
//     setTimeout(() => console.log(this.name + '!'), 100);
//   }
// }


//interval function too much, pg wouldn't load, it already changes at the hour anyway

$('.e9').val(localStorage.getItem('9h00'));
$('.e10').val(localStorage.getItem('10h00'));
$('.e11').val(localStorage.getItem('11h00'));
$('.e12').val(localStorage.getItem('12h00'));
$('.e13').val(localStorage.getItem('13h00'));
$('.e14').val(localStorage.getItem('14h00'));
$('.e15').val(localStorage.getItem('15h00'));
$('.e16').val(localStorage.getItem('16h00'));
$('.e17').val(localStorage.getItem('17h00'));