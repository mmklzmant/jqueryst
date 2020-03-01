//================ *选择器 ===========================
// 查找文档中的每一个元素（包括 head, body 等）
// var count = $('*').css("border", "3px solid red").length;
// $("body").prepend('<h3>' + count + 'elements found</h3>');

// 查找document.body的所有元素 所以像head，script等元素被排除在外。
// var count = $('body').find('*').css("border", "3px solid red").length;
// $('body').prepend('<h3>' + count + "elements found</h3>");

//================ .class选择器 ===========================
// $('.myClass').css('border', '3px solid red');
// $('.myClass.otherClass').css('border', '3px solid red')

// ================ element选择器 ===========================
// $('span').css('border', '3px solid red');

// ================ #id选择器 ===========================
// $('#notMe').css('border', '3px solid red');
// $('#myID\\.entry\\[0\\]').css('border', '3px solid red');

// ================ multiple selector选择器 ===========================
// JQuery('selector1, selector2, selectorN')
// $('#notMe, .otherClass').css('border', '3px solid red');

// ================== 层级 =====================================
// ================ parent > child选择器 ===========================
// $('ul.topnav > li').css('border', '1px solid red');

// ================ ancestor descendant选择器 ===========================
// $('ul.topnav li').css('border', '1px solid red');

// ================ prev ~ siblings选择器 ===========================
// $('.topnav ~ div').css('border', '3px solid red');
// $('.topnav + div').css('border', '3px solid red');

// ================== 基本筛选 =====================================
// ================== :animated =====================================
// no

// ================== :eq =====================================
// $('td:eq(2)').css('color', 'red');

// ================== :even =====================================
// $('tr:even').css('color', 'red');
// ================== :odd =====================================
// $('tr:odd').css('color', 'red');


// ================== :first =====================================
// $('tr:first').css('color', 'red');
// ================== :last =====================================
// $('tr:last').css('color', 'red');

// ================== :gt =====================================
// $('tr:gt(1)').css('color', 'red');

// ================== :lt =====================================
// $('tr:lt(1)').css('color', 'red');

// ================== :header =====================================
// $(':header').css('color', 'red');

// ================== :lang =====================================
// $('div:lang(fr)').css('border', '1px solid red');

// ================== :not(selector) =====================================
// $('input:not(:checked) + span').css('background-color', 'yellow');

// ================== :root =====================================
// console.log("root==", $(':root'));
// $("<b></b>").html($( ":root")[0].nodeName).appendTo( "#log" );


// ================== 内容筛选 =====================================
// ================== :contains(text) =====================================
// $('div:contains(John)').css('text-decoration', 'underline');

// ================== :empty =====================================
// $('div:empty').css('border', '1px solid red');

// ================== :has(selector) =====================================
// $('div:has(span)').css('border', '1px solid red');

// ================== :parent =====================================
// $('span:parent').css('border', '1px solid red');


// ================== 属性 =====================================
// ================== [attr|=value] =====================================
// $('a[hreflang|="en"]').css('border', '1px solid red');

// ================== [attr*=value] =====================================
// $('a[hreflang*="lish"]').css('border', '1px solid red');

// ================== [attr~=value] =====================================
// $('a[hreflang~="lish"]').css('border', '1px solid red');

// ================== [attr$=value] =====================================
// $('a[hreflang$="lish"]').css('border', '1px solid red');

// ================== [attr=value] =====================================
// $('a[hreflang="english"]').css('border', '1px solid red');

// ================== [attr!=value] =====================================
// $('a[hreflang!="english"]').css('border', '1px solid red');

// ================== [attr^=value] =====================================
// $('a[hreflang^="en"]').css('border', '1px solid red');

// ================== [attr] =====================================
// $('a[hreflang]').css('border', '1px solid red');

// ================== [attributeFilter1][attributeFilter2][attributeFilterN] =====================================
// $('a[id][tt~=lish]').css('border', '1px solid red');


// ================== 表单 =====================================
// ================== :button =====================================
// $(':button').css('border', '1px solid red');

// ================== :checkbox =====================================
// $("form input:checkbox").wrap('<span></span>').parent().css({background:"yellow", border:"3px red solid"});

// ================== :disabled =====================================
// $('input:disabled').val('this is it');

// ================== :file =====================================
$('input:file').css('background', 'yellow');