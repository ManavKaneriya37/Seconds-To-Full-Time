var takeInput = document.getElementById("second");
var btn = document.getElementById("btn");
var hour = document.getElementById("res1");
var minute = document.getElementById("res2");
var second = document.getElementById("res3");

btn.addEventListener("click", function () {
  var output = document.querySelector(".result");
  output.classList.add("active");

  let h, min, sec;
  let inputVal = takeInput.value;
  if (inputVal == 3600) {
    h = 1;
    min = 0;
    sec = 0;

    hour.innerHTML = h;
    minute.innerHTML = min;
    second.innerHTML = sec;
  }
  if (inputVal < 3600) {
    // console.log(inputVal)
    h = 0;
    min = parseInt(inputVal / 60);
    sec = inputVal % 60;
    hour.innerHTML = h;
    minute.innerHTML = min;
    second.innerHTML = sec;

    // console.log(valH)
    // console.log(valM)
    // console.log(valS)
  } else if (inputVal > 3600) {
    // console.log(inputVal)
    min = inputVal / 60;
    h = parseInt(min / 60);
    min = parseInt(min % 60);
    sec = parseInt(inputVal % 60);

    hour.innerHTML = h;
    minute.innerHTML = min;
    second.innerHTML = sec;

    // console.log(valH)
    // console.log(valM)
    // console.log(valS)
  }
});
