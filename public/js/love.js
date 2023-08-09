function showtime(){
  var time = new Date();
  var h = time.getHours();
  var m = time.getMinutes();
  var s = time.getSeconds();
  m = verifytime(m);
  s = verifytime(s);
  document.getElementById("times").innerHTML="Time: "+h+":"+m+":"+s+" ";
  setTimeout("showtime()",1000);
}

function verifytime(obj){
  if(obj<10)
    return "0"+obj
  else
    return obj
}

var date = new Date("24 Dec 2022");
var newDate = new Date();
var years = newDate.getFullYear() - date.getFullYear();
var months = newDate.getMonth() - date.getMonth();
var days = newDate.getDate() - date.getDate();
if(days<0){
  months = months-1;
  days = 31 + days;
}
if(months<0){
  years = years - 1;
  months = 12 + months;
}
var totalDays = Math.floor((newDate - date)/(24*3600*1000))-1;
document.getElementById("calendar").innerHTML ="We have been together for " +years+" years "+months+" months "+days+" days";
document.getElementById("days").innerHTML =totalDays;

  