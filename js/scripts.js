$(document).ready(function(){
  $("#age").submit(function(event) {
    event.preventDefault();
    const age = parseInt($("input#inputAge").val());
    if (age >= 18) {
      $("#ofAge").show();
      $("#tooYoung").hide();
    } else {
      $("#tooYoung").show();
      $("#ofAge").hide();
    }
  });
});

