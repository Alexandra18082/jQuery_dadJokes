$(document).ready(function () {
  function getJoke() {
    $.ajax({
      url: "https://icanhazdadjoke.com/",
      method: "GET",
      dataType: "json",
      success: function (data) {
        console.log(data);
        $("#joke").text(data.joke);
      },
      error: function () {
        console.log("Ups, ceva nu a mers bine");
        $("#joke").text("Ups, ceva nu a mers bine");
      },
    });
  }
  getJoke();
  $("#new-joke").on("click", getJoke);
});
