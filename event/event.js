//================ *浏览器事件 ===========================
// $(window).resize(function () {
//     console.log("resize===");
// })

// $('#target').scroll(function () {
//     console.log("scroll========");
// })

//================ *文档加载 ===========================
// $.holdReady(true);
// console.log("hhhhhhhhhh");
// $.getScript("test.js", function() {
//   $.holdReady(false);
//   console.log("vvvvvvvvvv")
// });
// $(function () {
//     console.log("ready===");
// })

//================ *事件绑定 ===========================
// $('#other').on('click', {name: 'mm'}, function(e) {
//     console.log("hello ", e.data.name)
// })
// $('#other').one('click', {name: 'mm'}, function(e) {
//     console.log("hello ", e.data.name)
// })
// $('#other').trigger('click');
// $('#other').triggerHandler('click');

//================ *表单事件 ===========================
// $('#target2').blur(function() {
//     console.log("blur===");
// })
// $('#target2').change(function() {
//     console.log("change===");
// })
// $('#target2').focus(function() {
//     console.log("focus===");
// })
// $('#target2').select(function() {
//     console.log("select===");
// })
// $('form').submit(function() {
//     console.log("submit===");
// })

//================ *键盘事件 ===========================
// $('#target2').keydown(function(e) {
//     console.log("keydown");
// })
// $('#target2').keypress(function(e) {
//     console.log("keypress");
// })
// $('#target2').keyup(function(e) {
//     console.log("keyup");
// })

//================ *鼠标事件 ===========================
// $('#other').dblclick(function(e) {
//     console.log("dblclick");
// })
// $('#other').contextmenu(function(e) {
//     console.log("contextmenu");
// })
// $('#target2').focusin(function(e) {
//     console.log("focusin");
// })
// $('#target2').focusout(function(e) {
//     console.log("focusout");
// })
// $('#target2').hover(function(e) {
//     console.log("hoverin");
// }, function(e) {
//     console.log("hoverout");
// })
// $('#target2').mouseover(function() {
//     console.log("mouseover")
// })
// $('#target2').mouseenter(function() {
//     console.log("mouseenter")
// })
// $('#target2').mousemove(function() {
//     console.log("mousemove")
// })
// $('#target2').mouseleave(function() {
//     console.log("mouseleave")
// })
// $('#target2').mouseout(function() {
//     console.log("mouseout")
// })
// $('#target2').mousedown(function() {
//     console.log("mousedown")
// })
// $('#target2').mouseup(function() {
//     console.log("mouseup")
// })

//================ *事件对象 ===========================
$('#other').click(function(e) {
    console.log("current", e.currentTarget);
})