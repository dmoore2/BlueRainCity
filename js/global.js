//----------CONSTANTS-------------------
var DEFAULT_GOOGLE_SPREADSHEET_URL = "https://docs.google.com/spreadsheet/pub?key=0ApOCdMtD_lyYdDlhNGY0TWs3aFYteFhjMkJMU181bmc&output=html";
var DEFAULT_CURRENT_VIDEO_KEY_CODE = "XrvSMtXHSSg";
var DEFAULT_CURRENT_VIDEO_PLAYLIST_KEY_CODE = DEFAULT_CURRENT_VIDEO_KEY_CODE;
var DEFAULT_TXT_IS_PAUSED = false;
var DEFAULT_TXT_DURATION = 1200;
var DEFAULT_TXT_TRANSITION = 1000;
var DEFAULT_TXT_EFFECT = 'random';
var DEFAULT_TXT_CENTERED = true;
var DEFAULT_TXT_ORDER_IS_RANDOM = false;



//----------VARIABLES------------
//the actual list of text for the textualizer display
var txt_list;
var txt_previous_index = -1;
var txt_current_index = 0;


//the jquery selected object that displays text 
var txt_object;

var txt_is_paused = DEFAULT_TXT_IS_PAUSED;
var current_video_key_code = DEFAULT_CURRENT_VIDEO_KEY_CODE;
var current_video_playlist_key_code = DEFAULT_CURRENT_VIDEO_PLAYLIST_KEY_CODE;
var txt_duration = DEFAULT_TXT_DURATION;
var txt_transition = DEFAULT_TXT_TRANSITION;
var txt_effect = DEFAULT_TXT_EFFECT;
var txt_centered = DEFAULT_TXT_CENTERED;
var txt_order_is_random = DEFAULT_TXT_ORDER_IS_RANDOM;


//related to the google spreadsheet that has the data which is being displayed
var currentGoogleSpreadsheetURL = DEFAULT_GOOGLE_SPREADSHEET_URL;
var currentGoogleSpreadsheetJSONData;

//the youtube video and playlist id's. will be identical for a loop. 
var current_video_id, current_video_playlist_id;

//mapping for getting values from url
var null_url_encoding_map = 
{
	"google_spreadsheet_url" : null,
	"current_video_key_code" : null,
	"current_video_playlist_key_code" : null,
	"txt_is_paused" : null,
	"txt_duration" : null,
	"txt_transition" : null,
	"txt_effect" : null,
	"txt_centered" : null,
	"txt_order_is_random" : null
};

