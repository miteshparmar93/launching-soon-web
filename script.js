var coundoun = new Date('Dec 16, 2024 00:00:00').getTime();
var x = setInterval(function(){
  var now = new Date().getTime();
  var distance=(coundoun - now);


  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60 )) / (1000 * 60 ));
  var seconds = Math.floor((distance % (1000 * 60 )) /  1000);

  document.getElementById("Days").innerHTML = days;
  document.getElementById("Hours").innerHTML = hours;
  document.getElementById("Minutes").innerHTML = minutes;
  document.getElementById("Seconds").innerHTML = seconds;
 // document.getElementById("Hours").style.fontSize= "60px";

 if(distance < 0){
  clearInterval(x);
  document.getElementById("Days").innerHTML = "00";
  document.getElementById("Hours").innerHTML = "00";
  document.getElementById("Minutes").innerHTML = "00";
  document.getElementById("Seconds").innerHTML = "00";

 }







}, 1000)