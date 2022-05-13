$('.banner .btn').click(function() {
    $('.modal').addClass('active');
    $('body').addClass('hidden');
});
$('.header__phone .call').click(function() {
    $('.modal-call').addClass('active');
    $('body').addClass('hidden');
});
$('.modal__close').click(function() {
    $('.modal').removeClass('active');
    $('.modal-call').removeClass('active');
    $('body').removeClass('hidden');
});
$('.header__burgir').click(function() {
    $('.header__navbar').toggleClass('active');
    $(this).toggleClass('active');
});