$(document).ready(function() {
	currentGoogleSpreadsheetURL = "https://docs.google.com/spreadsheet/pub?key=0ApOCdMtD_lyYdDlhNGY0TWs3aFYteFhjMkJMU181bmc&output=html";
	getJSONDataFromGoogleSpreadsheet(currentGoogleSpreadsheetURL);
});

function initDisplay()
{
    txt_object = $('#txtlzr');
    var txt_options = {
    	duration: TXT_INIT_DURATION,          // Time (ms) each blurb will remain on screen
		rearrangeDuration: TXT_INIT_TRANSITION, // Time (ms) a character takes to reach its position
		effect: TXT_INIT_EFFECT,        // Animation effect the characters use to appear
		centered: TXT_INIT_CENTERED           // Centers the text relative to its container
    };
    txt_object.textualizer(txt_list, txt_options);
    txt_object.textualizer('start');

    txt_object.on('textualizer.changed', function(event, args) {

    //check if last index --> THIS CODE WORKS!

	 // if (args.index === txt_list.length-1) {
	 //  	 alert("pause");
	 //     txt_object.textualizer('pause');
	 //   }
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