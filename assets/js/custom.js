$(window).on('load', function() {
  $('.pre-loader').delay(2500).fadeOut('slow'); 
});

$( document ).ready(function() {
  $( ".btn" ).on("click", nextSlide)   
  function nextSlide(){
    var animationIn = 'pageIn'
    var animationOut = 'pageOut'
    var $actualSlide = $(this).parent('.slide')
    var $nextSlide = $('.slide')

    $actualSlide.addClass(animationOut)

    if($actualSlide.is($('.slide').last())){
      setTimeout(function(){
        answers = []
        $actualSlide.removeClass(animationOut + ' is-showing');
        $nextSlide.first().addClass('is-showing').addClass(animationIn);
      }, 600)
      setTimeout(function(){
        $nextSlide.first().removeClass(animationIn)
      }, 1200)
    }
    else{
      setTimeout(function(){
        $actualSlide.removeClass(animationOut + ' is-showing').next().addClass('is-showing').addClass(animationIn);
      }, 600)

      setTimeout(function(){
        $actualSlide.next().removeClass(animationIn)
      }, 1200)
    }
  };
});