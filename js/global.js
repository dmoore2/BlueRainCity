//----------CONSTANTS-------------------
var TXT_INIT_DURATION = 1500;
var TXT_INIT_TRANSITION = 1000;
var TXT_INIT_EFFECT = 'random';
var TXT_INIT_CENTERED = 'true';



//----------VARIABLES------------
//the actual list of text for the textualizer display
var txt_list;

//the jquery selected object that displays text 
var txt_object;

var txt_is_paused = false;

//related to the google spreadsheet that has the data which is being displayed
var currentGoogleSpreadsheetURL;
var currentGoogleSpreadsheetJSONData;

//the youtube video and playlist id's. will be identical for a loop. 
var current_video_id, current_video_playlist_id;

