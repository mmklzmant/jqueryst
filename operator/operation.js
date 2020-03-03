//================ *拷贝 ===========================
// console.log("clone===", $('.container').clone().get());

//================ *插入包裹 ===========================
// $('.hello').wrap('<div class="test"></div>')
// $('.hello').wrapAll('<div class="test"></div>')
// $('.hello').wrapInner('<div class="test"></div>')

//================ *内部插入 ===========================
// $('.goodbye').append('<div>mm</div>')
// $('<div>mm</div>').appendTo($('.goodbye'));
// console.log("html==", $('.container').html());
// $('.hello').html('<p>hello mm</p>')
// $('.hello').prepend('mm');
// $('<span>mm</span>').prependTo($('.hello'));
// console.log("text==", $('.hello').text());
// $('.hello').text('mmkl')

//================ *外部插入 ===========================
// $('.container').after($('h1'))
// $('.container').insertAfter($('h1'))
// $('.container').before($('h1'))
// $('.container').insertBefore($('h1'))

//================ *Dom移除 ===========================
// $('h1').detach();
// $('.container').empty();
// $('h1').remove();
// $('.hello').unwrap();

//================ *Dom替换 ===========================
// $('<p>Hello mm</p>').replaceAll($('.hello'))
$($('.hello')).replaceWith('<p>Hello mm</p>')
