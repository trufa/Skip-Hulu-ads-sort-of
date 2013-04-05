$(document).ready(function(){
    $("#search-container").css("left","53%");
    $(".header-left").after('<input style="margin: 21px 0px 0px 436px;" maxlength="2" size="5" id="timer"></input>');
    var url = chrome.extension.getURL('images/hourglass.png');
    $('#timer').after('<img id="green-tick" src="' + url + '" alt="set" style="display:none;margin: -23px 0px 0px 480px;">"');
     $('#timer').keypress(function(e) {
     if(e.which == 13) {
     	$("#green-tick").show();
     	var time = (parseInt($(this).val())*1000)-3000;
        setTimeout("alert('Done! Remember to un-mute the video.');", time);
        $("#timer").val("");
        $("#timer").prop('disabled', true);
        setTimeout("$('#green-tick').hide();$('#timer').prop('disabled', false);",time);
     }
 });
});