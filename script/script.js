$('.hiring-items > div').on('click', function(){
  $(this).children('.hiring-icon').toggleClass('active');
  $(this).parent('.hiring-items').toggleClass('toggleBg');
  $(this).toggleClass('toggleColor ');
  $(this).next('p').slideToggle(500).toggleClass('toggleColor ');
}) 

$('.features-flex-content-select__item').on('click', function(){
  $(this).next('.features-flex-content-select__text').slideToggle(400);
  $(this).children('svg').children('path').toggleClass('features-flex-content-select__item_change-color-image');
  $(this).children('p').toggleClass('features-flex-content-select__item_change-color-p');
  $(this).next('.features-flex-content-select__text').next('.features-flex-content-select__line').toggleClass('features-flex-content-select__line_change');
})


$('.carusel').slick({
    /*autoplay: true,*/
    autoplaySpeed:5000,
    dots: true,
    adaptiveHeight:true,
});


$(window).scroll(function(){
    if($(this).scrollTop() > 500){
      $('#up').fadeIn();
    }
    else{
      $('#up').fadeOut();
    }
})

$('#up').on('click', function(){
    $('html, body').animate({scrollTop:0}, 1000)
})

$('#home').on('click', function(e){
  e.preventDefault();
  $('html, body').animate({scrollTop: $('#features').offset().top}, 500);
  
  document.getElementById("toggleCheckbox").checked=false;
  $('body').css({'overflow': 'visible'})
})

$('#stories').on('click', function(e){
  e.preventDefault();
  $('html, body').animate({scrollTop: $('#surfaces').offset().top}, 500);
  
  document.getElementById("toggleCheckbox").checked=false;
  $('body').css({'overflow': 'visible'})
})



$('#menuToggle #toggleCheckbox').change(function() {
  if(this.checked) {
      $('body').css({'overflow': "hidden" })
  }
  else {
      $('body').css({'overflow': "visible" })
  }

});