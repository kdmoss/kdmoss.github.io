$(document).ready(function() {

  const herokuapp = "https://cors-anywhere.herokuapp.com";
  $.ajax({
    url: `${herokuapp}/https://k-state.instructure.com/api/v1/courses/89156/users`,
    type: "GET",
    data: {
      "access_token": "1726~BdDvtiWziiujVPxk4T7HZwZcqOe1mb559gwFPYPbGHOWk1QUoIGLkA6zwaOEO7xV",
      "per_page": 100
    },
    success: function(data) {

      for (let i = 0; i < data.length; i++)
        $("#student-list").append(`<li>${data[i].name}</li>`);
    }
  });
});
