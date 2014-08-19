$(document).ready(function() {
	getJSONDataFromGoogleSpreadsheet(currentGoogleSpreadsheetURL);
});

function initDisplay()
{
	console.log(txt_order_is_random);
	if(txt_order_is_random)
	{
		shuffleArray(txt_list);
	}
    txt_object = $('#txtlzr');
    var txt_options = 
    {
    	"duration" : txt_duration,          // Time (ms) each blurb will remain on screen
		"rearrangeDuration" : txt_transition, // Time (ms) a character takes to reach its position
		"effect" : txt_effect,        // Animation effect the characters use to appear
		"centered" : txt_centered           // Centers the text relative to its container
    };
    txt_object.textualizer(txt_list, txt_options);
    txt_object.textualizer('start');

    txt_object.on('textualizer.changed', function(event, args) {

	// -----SAVE----
    //check if the end of txt_list has been reached
    //
	// if (args.index === txt_list.length-1) 
	// {
	//     alert("pause");
	//     txt_object.textualizer('pause');
	// }
	// -------------


	  });

}


function showMenu()
{
	console.log("double click");
	if(txt_is_paused)
	{
		console.log("unpaused!");
		txt_object.textualizer('start');
	} else if (!txt_is_paused)
	{
		console.log("paused");
		txt_object.textualizer('pause');
	} else {
		alert("error, txt_is_paused not working for some reason");
	}
	txt_is_paused = !txt_is_paused;

}


function getJSONDataFromGoogleSpreadsheet(spreadsheetURL)
{
	localStorage.clear();
	var googleSpreadsheet = new GoogleSpreadsheet();
	googleSpreadsheet.url(spreadsheetURL);
	googleSpreadsheet.load(function(result) {
		// console.log(result);
		currentGoogleSpreadsheetJSONData = result;//JSON.stringify(result).replace(/,/g,",\n");
		txt_list = currentGoogleSpreadsheetJSONData["data"];
		initDisplay(); 
	});
}


function shuffleArray(array) 
{
	console.log("when am I calling you?");
  var currentIndex = array.length, temporaryValue, randomIndex ;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}
