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
let showMoreBtn = $("#moreApps")

function displayMoreApps() {
  console.log("Clicked");
  $(moreApps).css("display", "flex")
  $(moreApps).appendTo(workSection);
  $(showMoreBtn).css("display", "none")
}

document.getElementById("moreApps").addEventListener("click", displayMoreApps);
