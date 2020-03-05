//================ *全局处理程序 ===========================
// $( document ).ajaxComplete(function( event, xhr, settings ) {
//     if ( settings.url === "ajax/test.html" ) {
//       $( ".log" ).text( "Triggered ajaxComplete handler. The result is " +
//         xhr.responseText );
//     }
//   });
// var myObject = {
//     a: {
//       one: 1, 
//       two: 2, 
//       three: 3
//     }, 
//     b: [1,2,3]
//   };
// console.log("param==", decodeURIComponent($.param(myObject)));

//================ *辅助函数 ===========================
// $( "form" ).on( "submit", function( event ) {
//     event.preventDefault();
//     console.log( $( this ).serialize() );
//   });

//================ *底层接口 ===========================
$.ajax({
    method: "POST",
    url: "some.php",
    data: { name: "John", location: "Boston" }
  }).done(function( msg ) {
    alert( "Data Saved: " + msg );
  });


  $.ajax({
    method: "GET",
    url: "test.js",
    dataType: "script"
  });

  $.ajaxSetup({
    url: "/xmlhttp/",
    global: false,
    type: "POST"
  
  });
  $.ajax({ data: myData });


  $.get('ajax/test.html', function(data) {
    $('.result').html(data);
    alert('Load was performed.');
  });

  var jqxhr = $.getJSON("example.json", function() {
    alert("success");
  })
  .success(function() { alert("second success"); })
  .error(function() { alert("error"); })
  .complete(function() { alert("complete"); });


  $.getScript("ajax/test.js", function(data, textStatus, jqxhr) {
    console.log(data); //data returned
    console.log(textStatus); //success
    console.log(jqxhr.status); //200
    console.log('Load was performed.');
 });


 $('#result').load('ajax/test.html');