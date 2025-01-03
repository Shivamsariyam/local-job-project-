document.getElementById("searchButton").addEventListener("click", function() {
  const district = document.getElementById("district").value;
  const education = document.getElementById("education").value;
  window.location.href = `results.html?district=${district}&education=${education}`;

});