$(document).ready( function () {
	loadDataFromUrlHash(window.location.hash)
	
});



function loadDataFromUrlHash(urlHash)
{
	if(urlHash)
	{
		//create new keyset and fill it with with all provided values in the URL hash extention
		var key_set_for_url = Object.keys(null_url_encoding_map);
		var new_url_encoding_map = new Object();
		for (var i = 0; i < key_set_for_url.length; i++)
		{
			var temporary_value_from_url = $.urlParam(key_set_for_url[i]);
			if (temporary_value_from_url)
			{
				// console.log(temporary_value_from_url);
				new_url_encoding_map[key_set_for_url[i]] = decodeURIComponent(temporary_value_from_url);
			}
		}

		//for added properties stored url, just add to the below format of if statements and the
		//globally defined variable null_url_encoding_map
		if(new_url_encoding_map["google_spreadsheet_url"])
		{
			currentGoogleSpreadsheetURL = new_url_encoding_map["google_spreadsheet_url"];
		}
		if(new_url_encoding_map["current_video_key_code"])
		{
			current_video_key_code = new_url_encoding_map["current_video_key_code"];
		}
		if(new_url_encoding_map["current_video_playlist_key_code"])
		{
			current_video_playlist_key_code = new_url_encoding_map["current_video_playlist_key_code"];
		}
		if(new_url_encoding_map["txt_is_paused"])
		{
			txt_is_paused = new_url_encoding_map["txt_is_paused"];
		}
		if(new_url_encoding_map["txt_duration"])
		{
			txt_duration = new_url_encoding_map["txt_duration"];
		}
		if(new_url_encoding_map["txt_transition"])
		{
			txt_transition = new_url_encoding_map["txt_transition"];
		}
		if(new_url_encoding_map["txt_effect"])
		{
			txt_effect = new_url_encoding_map["txt_effect"];
		}
		if(new_url_encoding_map["txt_centered"])
		{
			txt_centered = new_url_encoding_map["txt_centered"];
		}
		if(new_url_encoding_map["txt_order_is_random"])
		{
			txt_order_is_random = new_url_encoding_map["txt_order_is_random"];
		}
	}
}





//decode url with regExp
$.urlParam = function(name){
    var results = new RegExp('[\#&]'+name+'=([^&#]*)').exec(window.location.href);
    // console.log(name +"-->" +results);
    if (results == null) return null;
    return results[1] || 0; //means the value is empty if returns 0
}


//examples of encoding and decoding variables in url:

		//append to url without reload, in practice
	// should first check to be sure the there is not already an appended string
	// window.location+="#?&amp;param2=city&amp;id=I catn&amp;emptyval=sdf%20sdf&amp;param1=1231231312";


	
	//get values from url
	// console.log($.urlParam('param1')); // name
	// console.log($.urlParam('emptyval')); // name
	// console.log($.urlParam('id')); // name
	// console.log(decodeURIComponent($.urlParam('param1'))); // name
	// console.log(decodeURIComponent($.urlParam('emptyval'))); // name
	// console.log(decodeURIComponent($.urlParam('id'))); // name



//further examples of using decodeURIComponent
	// console.log("order 1");
	// var url = $(location).attr('href'); //get current url
	// console.log(decodeURIComponent(url));
	// //OR
	// var url = 'folder%2Findex.html%3Fparam%3D%2323dd%26noob%3Dyes'; //or specify one
	 
	// var decodedUrl = decodeURIComponent(url);
	// console.log(decodedUrl);
