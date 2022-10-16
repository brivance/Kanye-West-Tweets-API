document.getElementById("weatherSubmit").addEventListener("click", function(event) {
  event.preventDefault();
  const value = document.getElementById("weatherInput").value;
  if (value === "")
    return;
  console.log(value);
  
  
  const url = "https://api.kanye.rest";
  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {	
      console.log(json)
      
    let results = "";
    results += "<div class = 'quote'>"
// 	results += '<p>"https://placebear.com/200/300.png" width="150">';
      
      results += "</div>" //today class
      document.getElementById("weatherResults").innerHTML = results;
    });
});
