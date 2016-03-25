$(document).ready(function() {

  var characterHtml;

  $("form#character").submit(function(event) {
		event.preventDefault();


    var quest1score = parseInt($("input:radio[name=quest1]:checked").val());
    var quest2score = parseInt($("input:radio[name=quest2]:checked").val());
    var quest3score = parseInt($("input:radio[name=quest3]:checked").val());
    var quest4score = parseInt($("input:radio[name=quest4]:checked").val());
    var quest5score = parseInt($("input:radio[name=quest5]:checked").val());

    var score = quest1score + quest2score + quest3score + quest4score + quest5score;

    if (score <= 7) {
      characterHtml = $("#char1").clone();

    } else if (score <= 10) {
      characterHtml = $("#char2").clone();

    } else if (score <= 13) {
      characterHtml = $("#char3").clone();

    } else if (score <= 16) {
      characterHtml = $("#char4").clone();

    } else {
      characterHtml = $("#char5").clone();

    }
    var modal = $("#myModal")
    modal.find('.modal-body').html(characterHtml);
    modal.modal("show");
  });
  $("#myModal").on("hidden.bs.modal", function()  {
    window.location.reload()
  });
});
