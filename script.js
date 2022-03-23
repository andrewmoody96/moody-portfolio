let workSection = $("#work-id");
let moreApps = $(`<div id="other-app">
<div class="card">
  <a href="https://andrewmoody96.github.io/moody-hw3/" target="_blank">
    <h3>JS Password Generator</h3>
    <h5>JS Password Generator</h5>
    <img
      class="other-app-pic"
      src="./Assets/Images/03-javascript-homework-demo.png"
      alt="Photo of web application."
    />
  </a>
</div>
<div class="card">
  <a
    href="https://andrewmoody96.github.io/moody-hw6-WeatherDashboard/"
    target="_blank"
  >
    <h3>Weather Dashboard</h3>
    <h5>Weather Dashboard</h5>
    <!-- UPDATE WEATHER APP AND REPLACE PIC -->
    <img
      class="other-app-pic"
      src="./Assets/Images/Google Pic.png"
      alt="Photo of web application."
    />
  </a>
</div>
<div class="card">
  <a
    href="https://andrewmoody96.github.io/chocolateinyourpocket/"
    target="_blank"
  >
    <h3>Chocolate In Your Pocket</h3>
    <h5>Chocolate In Your Pocket</h5>
    <img
      class="other-app-pic"
      src="./Assets/Images/CIYP Website Pic.png"
      alt="Photo of featured web application."
    />
  </a>
</div>
<div class="card">
  <a
    href="https://andrewmoody96.github.io/moody-hw5/"
    target="_blank"
  >
    <h3>Work Day Scheduler</h3>
    <h5>Work Day Scheduler</h5>
    <img
      class="other-app-pic"
      src="./Assets/Images/workDayScheduler.png"
      alt="Photo of web application."
    />
  </a>
</div>
</div>`);
let showMoreBtn = $("#moreApps");

function displayMoreApps() {
  console.log("Clicked");
  $(moreApps).css("display", "flex");
  $(moreApps).appendTo(workSection);
  $(showMoreBtn).css("display", "none");
}

// TEXT ANIMATION EFFECT

/* Found online at https://www.sliderrevolution.com/resources/css-text-animation/ */
consoleText(["Hello Everyone!", "My name is Andrew."], "text", ["white"]);

function consoleText(words, id, colors) {
  if (colors === undefined) colors = ["#fff"];
  var visible = true;
  var con = document.getElementById("console");
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id);
  target.setAttribute("style", "color:" + colors[0]);
  window.setInterval(function () {
    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount);
      window.setTimeout(function () {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute("style", "color:" + colors[0]);
        letterCount += x;
        waiting = false;
      }, 1000);
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function () {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000);
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount);
      letterCount += x;
    }
  }, 120);
  window.setInterval(function () {
    if (visible === true) {
      con.className = "console-underscore hidden";
      visible = false;
    } else {
      con.className = "console-underscore";

      visible = true;
    }
  }, 400);
}

document.getElementById("moreApps").addEventListener("click", displayMoreApps);
