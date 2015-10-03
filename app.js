$(document).ready(function(){

// get event object's width
  function getWidth(element, width){ // pass two parameters, element text and width
    console.log(element + " " + width); // log the results
  } // defining getWidth function

// event trigger
  $(".event").click(function (){ // when .event classes are clicked
    getWidth( //use the getWidth function with these two parameters
      $(this).html() + " is: ", // get the clicked element's html content
      $(this).width()// get the clicked element's width
    ); // calling getWidth method
  }); //.event.click

// get mouse coordinates and display on page; 
  $(document).mousemove(function( event ) {
    var msg = event.pageX + " x " + event.pageY;
    $( "#mouse-position" ).text(msg).css({"left": event.pageX + 20, "top": event.pageY + -20 });
  });


// set width of event object
  function setWidth(xdistance){
    var currentWidth = $(".event").width();
    var newWidth = xdistance;
    $(".event").width(currentWidth + xdistance);
  }  

// get drag xdistance
  var x1 = null;
  var x2 = null;
  var y1 = null;
  var y2 = null;
  var xdistance;
  var ydistance;

  $(document)
    .mousedown(function() {
    x1 = event.pageX;
    y1 = event.pageY;
    // console.log(x1);
    // getxdistance(event.pageX);
  })
    .mouseup(function() {
    x2 = event.pageX;
    y2 = event.pageY;
    xdistance = x2-x1;
    ydistance = y2-y1;
    console.log(x2 + " - " + x1 + " = "+ xdistance);
    setWidth(xdistance); //call setWidth method with new xdistance
  });

// set up canvas
  var canvas = document.getElementById("paper"),
      c = canvas.getContext("2d");
      c.canvas.width = window.innerWidth;
      c.canvas.height = window.innerHeight;

// draw a square
  function drawSquare(startPageX,startPageY, xdistance, ydistance){ 
    c.fillStyle = "silver";
    c.fillRect(startPageX, startPageY, xdistance, ydistance);
  }

  $(document).click(function(e){
    drawSquare(x1 - 1, y1 -3, xdistance, ydistance);
  });

// // add event
//   function createEvent(xdistance){
//     $(".timeline").append("<div>New Event</div>");
//   }
//   $(document).click(function(){
//     createEvent();
//   });


  /*
  NOTES
  events on timeline
  click on event to get width
  .event objects are draggable

  get mouse position on click, log it
  move mouse
  get mouse on release, log it
  get difference between two mouse actions
  combine it to event object width


  */
});