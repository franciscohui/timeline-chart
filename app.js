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
    
  // make all .event objects draggable
  // function draggable(){
  //   $(".event").draggable();
  // }
  // draggable(); // call the fuction so it's triggered

  // $(function() { // how does this function work? 
  //   $(".event").draggable();
  // }); // automatically runs function on load

  // get mouse coordinates and display on page; 
  $(document).mousemove(function( event ) {
    var msg = "X: "+ event.pageX + " Y:" + event.pageY;
    $( "#mouse-position" ).text(msg);
  });


//////////

  var x1 = null;
  var x2 = null;

  $(document)
    .mousedown(function() {
    x1 = event.pageX;
    console.log(x1);
    // getDistance(event.pageX);
  })
    .mouseup(function() {
    x2 = event.pageX;
    distance = x2-x1;
    console.log(x2 + " - " + x1 + " = "+distance);
  });

////////////

/*

var mousedown;

$(document).click(function(e){
  mousedown = $(document).pageX;
  console.log("mousedown: " + mousedown);
});
*/

  /*
  v4
  var d = ["", ""];
    // get mouse distance
    function getDistance(d0, d1){
      d[0] = d0;
      d[1] = d1;
      var totalDistance = Math.abs(d[0] - d[1]);
      console.log(d[0] + "-"+ d[1] + " = " + totalDistance );
    }
  */

  /*
  var d0;
  var d1;
  
  returns
  d0 undefined
  undefined d1 // maybe I need to separate out the two functions

  $(document)
    .mousedown(function(e){
      var d0 = e.pageX;
      console.log(d0, d1)
    })
    .mouseup(function(e){
      var d1 = e.pageX;
      console.log(d0, d1)
    });
  */


  $(function() {
    $("#demo-box").click(function(e) {

      var offset = $(this).offset();
      var relativeX = (e.pageX - offset.left);
      var relativeY = (e.pageY - offset.top);

      alert("X: " + relativeX + "  Y: " + relativeY);

    });
  });



  // v2
  // $(document).mouseup(function() {
  //     var x2 = event.pageX;
  //     var distance = x1-x2;
  //     console.log(x1 + " " + x2 + " Distance: " + distance);
  //   });

  // .mouseup(function() {
  //   var x2 = event.pageX;
  //   console.log("x1: " + x1 + " x2: " + x2);
  //   console.log(x1-x2);
  // });


  /* v1 
  var x1 = null;
  var x2 = null;
  $(document)
    .mousedown(function() {
    var x1 = event.pageX;
    console.log(x1);
    // getDistance(event.pageX);
  })
    .mouseup(function() {
    var x2 = event.pageX;
    console.log("x1: " + x1 + " x2: " + x2);
    console.log(x1-x2);
  });

  */

  // $(document).mousemove(function(event){
  //   var msg = "Mouse positions: ";
  //   msg += event.pageX + ", " event.pageY;
  //   $("#mouse-position").html(msg);
  //   // console.log(event.pageY, event.pageX);
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