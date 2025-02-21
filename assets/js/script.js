function startSparkle() {
  var navmenu = document.getElementById("navmenu");
  navmenu.classList.add("sparkling");
  setTimeout(function () {
    navmenu.classList.remove("sparkling");
  }, 3000); // Duration of the sparkle effect
}
