$(function () {
    // Get the text for the Handlebars template from the script element.
    var templateText = $("#tableTemplate").html();
    
    // Compile the Handlebars template.
    var tableTemplate = Handlebars.compile(templateText);
  
      // Define an array of rooms.
    var rooms = [
      { "#": 1, "Name": "Anthony Nelson", "Visitor Name & Phone #": "Jill 499-092-3789", "Covid [Y/N]": "No", "Final Visit": "No" },
      { "#": 2, "Name": "Helen Garcia", "Visitor Name & Phone #": "Sam 209-299-0179", "Covid [Y/N]": "No", "Final Visit": "No" },
      { "#": 3, "Name": "John Williams", "Visitor Name & Phone #": "Cindy 928-299-9822", "Covid [Y/N]": "No", "Final Visit": "No" }
    ];
    
    // Evaluate the template with an array of rooms and set the HTML
    // for the people table.
    $("#rooms").html(tableTemplate({ array: rooms }));