// const childname = document.querySelectorAll('childname')
// const child = ['ADAM', 'SARAH', 'JACK', 'SAM']

// $(document).ready(function(){
//     $("button").click(function(event){
//       $("span").text(event.timeStamp);
//     });
//   });
  function captureTime(){
    // Get current time
    var currentTime = new Date();
    //Update the text of the button element to show the capture time
    document.getElementById("time-button").innerHTML = "" + currentTime;
    //disable the button
    document.getElementById("time-button").disabled = true;
  }

  function captureTimeout(){
    let currentTime = new Date();

    document.getElementById("timeout-button").innerHTML = "" + currentTime;
    //disable the button
    document.getElementById("timeout-button").disabled = true;
  }

  document.getElementById("outputField").innerHTML = inputValue;

  function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split("=");
      if (pair[0] == variable) {
        return pair[1];
      }
    }
    return false;
  }

  var inputValue = getQueryVariable("input");
  document.getElementById("outputField").innerHTML = inputValue;