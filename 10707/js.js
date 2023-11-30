$(".main-menu > li").mouseenter(function () {
    $(".sub-menu").stop().slideDown();
})

$(".main-menu > li").mouseleave(function () {
    $(".sub-menu").stop().slideUp();
})