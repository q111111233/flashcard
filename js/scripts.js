$(document).ready(function() {
  $("button#dark").click(function() {
    $("body").removeClass();
    $("body").addClass("green-background");
  });
  $("button#light").click(function() {
    $("body").removeClass();
    $("body").addClass("red-background");
});
});
