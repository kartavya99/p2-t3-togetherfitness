$(document).ready(function(){
  $( "#datepicker" ).datepicker({ dateFormat: "yy-mm-dd" });
  $("input.timepicker").timepicker({
    timeFormat: "h:mm p",
    interval: 30,
    minTime: "10",
    maxTime: "6:00pm",
    defaultTime: "11",
    startTime: "10:00",
    dynamic: false,
    dropdown: true,
    scrollbar: true
  });
});
