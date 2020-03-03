//================ *属性 ===========================
// const title = $('em').attr('title');
// $('div').text(title);
// $('em').attr('title', 'mmkl');

$('button').click(function() {
    const text = $(this).text();
    $('input').val(text);
});
//================ *css ===========================
console.log("xxx", $('#test').hasClass('mm'));

//================ *尺寸 ===========================
console.log("height===", $(window).height());

//================ *位置 ===========================
console.log("offset===", $('button').offset());


//================ *数据 ===========================
$('div').data('mmkl', 'tql');
console.log("data===", $('div').data('mmkl'))
