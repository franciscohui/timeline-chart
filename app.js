$(document).ready(function(){

  // define function to get an event's width
  function getWidth(element, width){ // pass two parameters, element text and width
    console.log(element + " " + width); // log the results
  } // defining getWidth function

  // define event trigger
  $(".event").click(function (){ // when .event classes are clicked
    getWidth( //use the getWidth function with these two parameters
      $(this).html() + " is: ", // get the clicked element's html content
      $(this).width()// get the clicked element's width
    ); // calling getWidth method
  }); //.event.click
    


  // get mouse coordinates and display on page; 
  $(document).mousemove(function( event ) {
    var msg = "X: "+ event.pageX + " Y:" + event.pageY;
    $( "#mouse-position" ).text(msg);
  });

  // set width of event object
  function setWidth(distance){
    var currentWidth = $(".event").width();
    var newWidth = distance;
    $(".event").width(currentWidth + distance);
  }  

  // get distance
  var x1 = null;
  var x2 = null;
  var distance;

  $(document)
    .mousedown(function() {
    x1 = event.pageX;
    // console.log(x1);
    // getDistance(event.pageX);
  })
    .mouseup(function() {
    x2 = event.pageX;
    distance = x2-x1;
    console.log(x2 + " - " + x1 + " = "+ distance);
    setWidth(distance); //call setWidth method with new distance
  });


  // // add event
  // function createEvent(distance){
  //   $(".timeline").append("<div>New Event</div>");
  // }
  // $(document).click(function(){
  //   createEvent();
  // });


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