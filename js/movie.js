$(document).ready(function() {
	loadMovie();
});

function loadMovie()
{
	$("#movie_background").html('<iframe width="100%" height="100%" src="http://www.youtube.com/embed/'+current_video_key_code+'?playlist='+current_video_playlist_key_code+'&version=3&modestbranding=1&loop=1&autoplay=1&rel=0&showinfo=0&controls=0&autohide=1" frameborder="0" allowfullscreen></iframe>');
}