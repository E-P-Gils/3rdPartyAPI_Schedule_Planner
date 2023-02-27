// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  
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
  //Step Three: Grab the current time and map it to the html. 
    
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //Starting with this 3rd one: 
  // TODO: Add code to display the current date in the header of the page.
});
