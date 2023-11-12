function stopTime(){


  var stop = new Date();

  var timeDifference = stop.getTime() - start.getTime();

  var secondsPassed = timeDifference / 600;

  alert("You have been on this page for: " + secondsPassed +  " seconds")

}

var start = new Date();
