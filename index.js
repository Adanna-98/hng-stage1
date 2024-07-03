const currentdate = new Date();
// return a number representing the day  of the week ,starting from 0 for sunday
const day = currentdate.getDay();

// Array of day names
const daylist = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const date = "Today's date is " + daylist[day] + "."+  currentdate.getDay() + "/" + currentdate.getMonth() 
+ "/" + currentdate.getFullYear();
const time = "Time: "
+ currentdate.getHours() + ":" 
+ currentdate.getMinutes() + ":" + currentdate.getSeconds();

document.getElementById("date").innerHTML =date;
document.getElementById("time").innerHTML =time;