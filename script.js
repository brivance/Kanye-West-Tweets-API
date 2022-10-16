document.getElementById("button").addEventListener("click", function(event) {
  event.preventDefault();
  
  const url = "https://api.kanye.rest";
  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {	
      console.log(json)
      
    let results = "";
    results += "<div class = 'quote'>"
	  results += '<p>' + json.quote + '</p>';
      
      results += "</div>" //today class
      document.getElementById("newHtml").innerHTML = results;
    });
});
