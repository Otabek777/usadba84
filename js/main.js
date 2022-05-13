$('.banner .btn').click(function() {
    $('.modal').addClass('active');
});
$('.modal__close').click(function() {
    $('.modal').removeClass('active');
});
$('.header__burgir').click(function() {
    $('.header__navbar').toggleClass('active');
    $(this).toggleClass('active');
});