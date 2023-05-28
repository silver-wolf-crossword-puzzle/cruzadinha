var inputs = document.querySelectorAll("input.inpt");

for (var i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener("input", function() {
    var allValues = "";
    for (var j = 11; j <= 15; j++) {
      allValues += document.getElementById("" + j).getElementsByTagName("input")[0].value;
    }
    if (allValues === "GEESE") {
      for (var k = 11; k <= 15; k++) {
        document.getElementById("" + k).getElementsByTagName("input")[0].style.color = "green";
      }
    } else {
      for (var k = 11; k <= 15; k++) {
        document.getElementById("" + k).getElementsByTagName("input")[0].style.color = "red";
      }
    }
  });
}