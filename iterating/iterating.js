//================ *筛选 ===========================
// $('li').eq(-2).css('background-color', 'red')
// $('li').filter(':even').css('background-color', 'red');
// $('li').first().css('background-color', 'red');
// $('li').has('span').css('background-color', 'red');
// console.log('is', $('ul').is(":first-child"))
// $('li').last().css('background-color', 'red');
// $('li').not(':even').css('background-color', 'red');
// $('li').slice(2).css('background-color', 'red');

//================ *各种遍历 ===========================
// console.log("ffff", $('ul').add('<p id="new">new paragraph</p>'))
// console.log("vv", $('li').contents());
// $( "li" ).each(function( index ) {
//     console.log( index + ": " + $(this).text() );
//   });

//================ *树遍历 ===========================
// $('li.third-item').nextAll().addBack()
//   .css('background-color', 'red');
// $('li').children('span').css('background-color', 'red');
// console.log("children==", $('li').children());
// console.log("closest", $('li').closest('ul'));
// console.log('find==', $('li').find('span'));
// $('li').next('.mm').css('background-color', 'red');
// $('li.third-item').nextAll().css('background-color', 'red');
// console.log("parent", $('li').parent());
// console.log("parent", $('li').parents());
// console.log("parent", $('li').parentsUntil('body'));
// $('li.mm').prev().css('background-color', 'red');
// $('li.mm').prevAll('.third-item').css('background-color', 'red');
// $('li.mm').prevUntil('.third-item').css('background-color', 'red');
$('li.third-item').siblings().css('background-color', 'red');

