$(document).ready(function() {
  $("form#character").submit(function(event) {
		event.preventDefault();

    $("#character").hide();

    var quest1score = parseInt($("input:radio[name=quest1]:checked").val());
    var quest2score = parseInt($("input:radio[name=quest2]:checked").val());
    var quest3score = parseInt($("input:radio[name=quest3]:checked").val());
    var quest4score = parseInt($("input:radio[name=quest4]:checked").val());
    var quest5score = parseInt($("input:radio[name=quest5]:checked").val());

    var score = quest1score + quest2score + quest3score + quest4score + quest5score;

    if (score <= 7) {
      $("#char1").show();
      $("#char2").hide();
      $("#char3").hide();
      $("#char4").hide();
      $("#char5").hide();
    } else if (score <= 10) {
      $("#char2").show();
      $("#char1").hide();
      $("#char3").hide();
      $("#char4").hide();
      $("#char5").hide();
    } else if (score <= 13) {
      $("#char3").show();
      $("#char1").hide();
      $("#char2").hide();
      $("#char4").hide();
      $("#char5").hide();
    } else if (score <= 16) {
      $("#char4").show();
      $("#char1").hide();
      $("#char2").hide();
      $("#char3").hide();
      $("#char5").hide();
    } else {
      $("#char5").show();
      $("#char1").hide();
      $("#char2").hide();
      $("#char3").hide();
      $("#char4").hide();
    }

  });
});
