function convert() {
  var value = document.getElementById("value").value;
  var from = document.getElementById("from").value;
  var to = document.getElementById("to").value;

  // AJAX request to retrieve the conversion rate from the server
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          var rate = parseFloat(this.responseText);
          var result = value * rate;
          document.getElementById("result").innerHTML = result.toFixed(2) + " " + to;
      }
  };
  xhr.open("GET", "conversion.php?from=" + from + "&to=" + to, true);
  xhr.send();
}

function init() {
  // Populate the dropdown lists with units
  var units = ["meter", "feet", "inch"];
  var from = document.getElementById("from");
  var to = document.getElementById("to");
  for (var i = 0; i < units.length; i++) {
      var option1 = document.createElement("option");
      var option2 = document.createElement("option");
      option1.text = option2.text = units[i];
      option1.value = option2.value = units[i];
      from.add(option1);
      to.add(option2);
  }
}

window.onload = init;

