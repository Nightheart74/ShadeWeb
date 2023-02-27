console.log("js file connected.")

var String; d = new Date();
let currentDate = d.toDateString();
let x = document.cookie;

console.log(x);

a = 0;

function change() {
  a++;

  document.getElementById("change").innerHTML = "Times Clicked: " + a;

  return a;
};


/*** function dateTest() {
  try {
    var date = new Date();
    document.getElementsByClassName("INSERT_DATE").innerHTML = date;
  } catch (e) {
    console.error("Error Detected.")
  };
}; ***/

function getCurrentDate() {
  let date;
  let dateTime;

  date = new Date;
  dateTime = date.toISOString().split("T")[0];

  document.querySelector("#INSERT_DATE").textContent = dateTime;
}

getCurrentDate();