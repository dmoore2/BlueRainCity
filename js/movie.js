$(document).ready(function() {
	//get movie code from URL
	current_video_id = "XrvSMtXHSSg";
	current_video_playlist_id = current_video_id;
	loadMovie();
});

function loadMovie()
{
	$("#movie_background").html('<iframe width="100%" height="100%" src="http://www.youtube.com/embed/'+current_video_id+'?playlist='+current_video_playlist_id+'&version=3&loop=1&autoplay=1&rel=0&showinfo=0&controls=0&autohide=1" frameborder="0" allowfullscreen></iframe>');
}