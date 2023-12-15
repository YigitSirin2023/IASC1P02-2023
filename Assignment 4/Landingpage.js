// The following code is from https://www.w3schools.com/howto/howto_js_countdown.asp


//set date to count down to
var countDownDate = new Date("Jan 1,2024 10:00:00").getTime()

//CountDown
var x = setInterval(function() {

  //get todays date and timeout
  var now = new Date().getTime();

  //find the distance between now and count down Date
  var distance = countDownDate - now;

  //Time calculations for days, hours, minutes, and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  //Display the result in the element with id= "timer"
  document.getElementById("timer").innerHTML = days + "d " + hours + "h "+ minutes + "m " + seconds + "s ";

  //if expired write the following "SALE IS OVER"
  if (distance < 0){
    clearInterval(x);
    document.getElementById("timer").innerHTML = "SALE IS OVER";
  }

}, 1000)
