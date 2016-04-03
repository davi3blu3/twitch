// streaming channels

var channels = ["freecodecamp", "storbeck", "terakilobyte", "habathcx", "RobotCaleb", "thomasballinger", "noobs2ninjas", "beohoff", "brunofin", "comster404", "sabercrit", "vinesauce", "exinthevatican"];

$.getJSON('https://api.twitch.tv/kraken/streams/freecodecamp?callback=?', function(data) {
  console.log(data);
  console.log(data.stream.channel.display_name);
  console.log(data.stream.channel.status);
  console.log(data.stream.channel.url);
  console.log(data.stream.channel.logo);
});

/* Active channel reponse example

{"stream":
	{"_id":20618844464,
	"game":"Creative",
	"viewers":12,
	"created_at":"2016-04-03T14:53:30Z",
	"video_height":720,
	"average_fps":31.0526315789,
	"delay":0,
	"is_playlist":false,
	"_links":
		{"self":"https://api.twitch.tv/kraken/streams/freecodecamp"},
	"preview":
		{"small":"https://static-cdn.jtvnw.net/previews-ttv/live_user_freecodecamp-80x45.jpg",
		"medium":"https://static-cdn.jtvnw.net/previews-ttv/live_user_freecodecamp-320x180.jpg",
		"large":"https://static-cdn.jtvnw.net/previews-ttv/live_user_freecodecamp-640x360.jpg",
		"template":"https://static-cdn.jtvnw.net/previews-ttv/live_user_freecodecamp-{width}x{height}.jpg"},
	"channel":
		{"mature":false,
		"status":"Lobomuzenza coding his game: Session 3 #gamedev #programming",
		"broadcaster_language":"en",
		"display_name":"FreeCodeCamp",
		"game":"Creative",
		"language":"en",
		"_id":79776140,
		"name":"freecodecamp",
		"created_at":"2015-01-14T03:36:47Z",
		"updated_at":"2016-04-03T17:01:53Z",
		"delay":null,
		"logo":"https://static-cdn.jtvnw.net/jtv_user_pictures/freecodecamp-profile_image-d9514f2df0962329-300x300.png",
		"banner":null,
		"video_banner":"https://static-cdn.jtvnw.net/jtv_user_pictures/freecodecamp-channel_offline_image-b8e133c78cd51cb0-1920x1080.png",
		"background":null,
		"profile_banner":"https://static-cdn.jtvnw.net/jtv_user_pictures/freecodecamp-profile_banner-6f5e3445ff474aec-480.png",
		"profile_banner_background_color":null,
		"partner":false,
		"url":"https://www.twitch.tv/freecodecamp",
		"views":139075,
		"followers":8763,
		"_links":
			{"self":"http://api.twitch.tv/kraken/channels/freecodecamp",
			"follows":"http://api.twitch.tv/kraken/channels/freecodecamp/follows",
			"commercial":"http://api.twitch.tv/kraken/channels/freecodecamp/commercial",
			"stream_key":"http://api.twitch.tv/kraken/channels/freecodecamp/stream_key",
			"chat":"http://api.twitch.tv/kraken/chat/freecodecamp",
			"features":"http://api.twitch.tv/kraken/channels/freecodecamp/features",
			"subscriptions":"http://api.twitch.tv/kraken/channels/freecodecamp/subscriptions",
			"editors":"http://api.twitch.tv/kraken/channels/freecodecamp/editors",
			"teams":"http://api.twitch.tv/kraken/channels/freecodecamp/teams",
			"videos":"http://api.twitch.tv/kraken/channels/freecodecamp/videos"}}},
	"_links":
		{"self":"https://api.twitch.tv/kraken/streams/freecodecamp",
		"channel":"https://api.twitch.tv/kraken/channels/freecodecamp"}}

*/

/* Inactive channel reponse example

{"stream": null, "_links: object"}
*/


// control displayed channels via selected tab

$("#all-chan-tab").on('click', function() {
	$('.nav-tabs > li').removeClass('active');
	$(this).addClass('active');
	$('.online').show();
	$('.offline').show();
});

$("#on-chan-tab").on('click', function() {
	$('.nav-tabs > li').removeClass('active');
	$(this).addClass('active');
	$('.online').show();
	$('.offline').hide();
});

$("#off-chan-tab").on('click', function() {
	$('.nav-tabs > li').removeClass('active');
	$(this).addClass('active');
	$('.online').hide();
	$('.offline').show();
});
