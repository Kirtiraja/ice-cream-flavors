$(document).ready(function() {
  $("#resultsbutton").click(function(event) {
    event.preventDefault();
    var flavors = ["chocolate", "strawberry", "mint", "pistachio"];
    flavors.forEach(function(flavor){
      $("ul#results").append("<li>" + flavor + "</li>");
    });
  });
});

// <li>chocolate</li>
