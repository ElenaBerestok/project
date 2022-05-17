$('.hiring-items > div').on('click', function(){
  $(this).children('.hiring-icon').toggleClass('active');
  $(this).parent('.hiring-items').toggleClass('toggleBg');
  $(this).toggleClass('toggleColor ');
  $(this).next('p').slideToggle(200).toggleClass('toggleColor ');
}) 

$('.carusel').slick({
    /*autoplay: true,*/
    autoplaySpeed:5000,
    dots: true,
    adaptiveHeight:true,
});