$(document).ready(function () {

  //Step One: Created an event listener to add the hour and text input as a key value pair to local storage when the save button is clicked. 
  $('button').on('click', function () {
    var scheduledItem = $(this).siblings(".description").val();
    var timeColumn = $(this).parent().attr("id");
    localStorage.setItem(timeColumn, scheduledItem);
  })
  
  //Step Two: We create a function here to retrieve the local storage key by defining it as a variable, then using find to find the text portion of the time columns and set map the value from local storage onto it. We iterate this process for each time column using jQuery's "each", which is kind of like a more powerful for loop. The "this" is key here as it allows us to act on the entire time column element using a single word.  
  function saveSchedule() {
    $(".time-block").each(function () {
      var timeColumn = $(this).attr("id");
      var scheduledItem = localStorage.getItem(timeColumn);
      $(this).find(".description").val(scheduledItem);
    })
  }
  saveSchedule();
  
  //Step Three: Here we create a function to grab the current time at any moment with dayjs(), format it with day.js formatting, then map it to the html using .text() which is basically jquery's .textcontent(). Then we run the function in an interval to make the time dynamic. 
  function timeCount() {
    var currentTime = dayjs();
    var currentTimeFormat = currentTime.format("h:mm:ss A");
    $("#currentDay").text(currentTimeFormat);
  }
  setInterval(timeCount, 1000);

  //Step Four: In this final step, we create a function executed to each element under the class time-block. We run a for loop comparing the column's hour to the current hour, and apply or remove a class to it based on that! 
  $(".time-block").each(function () {
    var currentHour = dayjs().hour();
    var columnHour = parseInt($(this).attr("id"));
    if (columnHour < currentHour) {
      $(this).removeClass("present future").addClass("past");
    } else if (columnHour === currentHour) {
      $(this).removeClass("past future").addClass("present");
    } else {
      $(this).removeClass("present past").addClass("future");
    }
  })
});
