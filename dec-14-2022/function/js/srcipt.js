var cd = document.getElementById("bd");

function bd(Country = "Bangladesh", city = "Dhaka") {
  cd.innerHTML += city + " is the capital of " + Country + "<br>";
}

// bd("India");
bd();
bd("India", "New Dilli");
