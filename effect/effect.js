//================ *效果 ===========================
// $('#clickme').click(function() {
    // $('#book').hide('slow', function() {
    //   console.log('Animation complete.');
    // });
    // $('#book').toggle('fast', 'swing', function() {
    //   console.log('Animation complete.');
    // });
    // $('#book').animate({
    //     opacity: 0.25,
    //     left: '+=50',
    //     height: 'toggle'
    // }, 'slow', function() {
    //   console.log('Animation complete.');
    // });
// });

//================ *stop/finish ===========================
// var horiz = $("#path").width() - 20,
//     vert = $("#path").height() - 20;
 
// var btns = {
//   bstt: function () {
//     $("div.box").stop(true, true);
//   },
//   bs: function () {
//     $("div.box").stop();
//   },
//   bsft: function () {
//     $("div.box").stop(false, true);
//   },
//   bf: function () {
//     $("div.box").finish();
//   },
//   bcf: function () {
//     $("div.box").clearQueue().finish();
//   },
//   bsff: function () {
//     $("div.box").stop(false, false);
//   },
//   bstf: function () {
//     $("div.box").stop(true, false);
//   },
//   bcs: function () {
//     $("div.box").clearQueue().stop();
//   }
// };
 
 
// $("button.b").on("click", function () {
//   btns[this.id]();
// });
 
// $("#go").on("click", function () {
//   $(".box")
//     .clearQueue()
//     .stop()
//     .css({
//     left: 10,
//     top: 10
//   })
//     .animate({
//     top: vert
//   }, 3000)
//     .animate({
//     left: horiz
//   }, 3000)
//     .animate({
//     top: 10
//   }, 3000);
// });

//================ *滑动 ===========================
// $('#clickme').click(function() {
//     $('#book').slideDown('slow', function() {
//     // Animation complete.
//     });
// });
$('#clickme').click(function() {
    $('#book').slideToggle('slow', function() {
    // Animation complete.
    });
});
