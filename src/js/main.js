$(document).ready(function() {

  const herokuapp = "https://cors-anywhere.herokuapp.com";
  $("#load").click(function() {
    let token = $("#token").val();
    
    $.ajax({
      url: `${herokuapp}/https://k-state.instructure.com/api/v1/courses/89156/users`,
      type: "GET",
      data: {
        "access_token": token,
        "per_page": 100
      },
      success: function(data) {

        for (let i = 0; i < data.length; i++)
          $("#student-list").append(`<li>${data[i].name}</li>`);
      }
    });
  });
});
