// streaming channels

var channels = ["freecodecamp", "storbeck", "terakilobyte", "habathcx", "RobotCaleb", "thomasballinger", "noobs2ninjas", "beohoff", "brunofin", "comster404", "sabercrit", "vinesauce", "exinthevatican"];



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
