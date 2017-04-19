var $spans = $('.nav-right span');
for(var i = 0; i<$spans.length;i++){
    $spans[i].onclick = function () {
        $(this).addClass('act');
        $(this).siblings().removeClass('act')
    }
}
