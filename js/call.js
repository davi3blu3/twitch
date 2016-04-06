'use strict';

$(document).ready(function () {

    // streaming channels
    var channels = ["freecodecamp", "storbeck", "cretetion", "habathcx", "RobotCaleb", "thomasballinger", "noobs2ninjas", "beohoff", "brunofin", "comster404", "sabercrit", "vinesauce", "exinthevatican", "terakilobyte"];

    // make API call for channel status
    channels.forEach(function (channel) {

        $.getJSON('https://api.twitch.tv/kraken/streams/' + channel + '?callback=?', function (data) {


            if (data.stream === null) {
                $(".container").append('<div class="row offline"><div class="col-xs-1"></div><div class="col-xs-2"><h4 class="channel-name">' + channel + '</h4></div><div class="col-xs-9"><h4 class="channel-status">Offline</h4></div></div>');
            } else if (data.stream === undefined) {
                $(".container").append('<div class="row offline"><div class="col-xs-1"></div><div class="col-xs-2"><h4 class="channel-name">' + channel + '</h4></div><div class="col-xs-9"><h4 class="channel-status">Not Found</h4></div></div>');
            } else {
                $(".nav").after('<div class="row online"><div class="img-col col-xs-1"><img class="channel-logo" src="' + data.stream.channel.logo + '" alt="freecodecamp logo"/></div><div class="col-xs-2"><h4 class="channel-name">' + data.stream.channel.display_name + '</h4></div><div class="col-sm-9"><a class="channel-link" href="' + data.stream.channel.url + '"><h4 class="channel-status">' + data.stream.channel.status + '</h4></a></div></div>');
            }
        });
    });


    // control displayed channels via selected tab
    $("#all-chan-tab").on('click', function () {
        $('.nav-tabs > li').removeClass('active');
        $(this).addClass('active');
        $('.online').show();
        $('.offline').show();
    });

    $("#on-chan-tab").on('click', function () {
        $('.nav-tabs > li').removeClass('active');
        $(this).addClass('active');
        $('.online').show();
        $('.offline').hide();
    });

    $("#off-chan-tab").on('click', function () {
        $('.nav-tabs > li').removeClass('active');
        $(this).addClass('active');
        $('.online').hide();
        $('.offline').show();
    });
});