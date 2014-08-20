$(document).ready(function() {
	getJSONDataFromGoogleSpreadsheet(currentGoogleSpreadsheetURL);

	// var fillFooter = '<div><p>Copyright (c) 2014</p><br/>';
	// for (var i = 0; i < 9; i++)
	// {
	// 	fillFooter+=fillFooter;
	// }
	// fillFooter = '<div class="fade_to_black footer_fade_height">'+'<div class="black-background">'+fillFooter+"</div></div>";
	// $("#theFooter").html(fillFooter);
});

function fill_footer_with_lyrics()
{

	// fill the footer with lyrics in blocks of the form:
	// <div id="footer_content_lyrics">
	// 		<div id="footer_content_lyrics_number_1" class="footer_content_lyrics_block block_of_text">
	// 			<p>content</p>
	// 		</div>
	//		.
	// 		.
	// 		.
	// </div>
	var fill_footer_lyrics = '<br/><br/><div id="footer_content_lyrics">';
	for (var i = 0; i < txt_list.length; i++)
	{
		fill_footer_lyrics += '<div id="footer_content_lyrics_number_'+i+'" class="footer_content_lyrics_block"><p class="block_of_text">'+txt_list[i]+"</p></div>";
		if(i == 0)
		{
			fill_footer_lyrics += "<br/>"	
		}
	}
	fill_footer_lyrics += "</div><br/><br/>"
	fill_footer_with(fill_footer_lyrics);
}

function initDisplay()
{
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


    txt_object.on('textualizer.changed', function(event, args)
	{
		console.log("got here");
		$("#footer_content_lyrics_number_"+txt_current_index).animate({width: '10px'},1000);
	  	//check if the end of txt_list has been reached
	   
			// if (args.index === txt_list.length-1) 
			// {
	  //   		alert("pause");
	  //   		txt_object.textualizer('pause');
			// }
	});
	// -------------


	fill_footer_with_lyrics();


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

function fill_footer_with(fill_footer)
{
	fill_footer = '<div class="fade_to_black footer_fade_height">'+'<div class="black-background">'+fill_footer+"</div></div>";
	$("#theFooter").html(fill_footer);
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
