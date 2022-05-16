let workSection = $("#work-id");
let moreApps = $(`<div id="other-app">
<div class="card">
<a
href="https://andrewmoody96.github.io/1-fish-2-fish-red-fish-joe-fish/"
target="_blank"
>
<h3>One Fish, Two Fish, Red Fish, Go Fish?</h3>
<h5>One Fish, Two Fish, Red Fish, Go Fish?</h5>
<h6 class="app-description">
  An application to help ocean fishers find information on species
  and weather for the location they'll be fishing at.
</h6>
<h4>
  <a
    href="https://github.com/andrewmoody96/1-fish-2-fish-red-fish-joe-fish"
    title="GitHub"
    class=""
    target="_blank"
    style="color: #d1e189"
    >Repo</a
  >
</h4>
<img
  class="other-app-pic"
  src="./Assets/Images/oneFishTwoFishRedFishGoFish.png"
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
    <h6>An app to show users weather data based on the city they input.</h6>
    <h4>
              <a
                href="https://github.com/andrewmoody96/1-fish-2-fish-red-fish-joe-fish"
                title="GitHub"
                class=""
                target="_blank"
                style="color: #d1e189;"
              >Repo</a>
            </h4>
    <img
      class="other-app-pic"
      src="./Assets/Images/weather-pic.png"
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
    <h6>Homepage for my band. A work in progress.</h6>
    <h4>
    <a
    href="https://github.com/andrewmoody96/1-fish-2-fish-red-fish-joe-fish"
    title="GitHub"
    class=""
    target="_blank"
    style="color: #d1e189;"
  >Repo</a>
  </h4>
    <img
      class="other-app-pic"
      src="./Assets/Images/CIYP Website Pic.png"
      alt="Photo of web application."
    />
  </a>
</div>
</div>`);
let showMoreBtn = $("#moreApps");

// Creates and appends HTML to show more apps I've developed.
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
