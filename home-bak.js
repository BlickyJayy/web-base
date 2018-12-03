

$(document).ready(function() {

  var imageIndex = 0
  var slideShowTime = 4000

  var imagePaths = [
    'images/image-1.jpeg', 'images/image-2.jpeg', 'images/image-3.jpeg', 'images/image-4.jpeg', 'images/image-5.jpeg', 'images/image-6.jpeg'
  ]

  var slideLoop = setInterval(loopSlides, slideShowTime)

  $('.slideshow .slideshow-image').click(function() {
    clearInterval(slideLoop)
    $('.slideshow .slideshow-overlay').fadeIn(300);
    $('.slideshow .slideshow-viewer').fadeIn(400);
  })

  $('.slideshow-overlay').click(function() {
    $('.slideshow .slideshow-overlay').fadeOut(400);
    $('.slideshow .slideshow-viewer').fadeOut(300);
    slideLoop = setInterval(loopSlides, slideShowTime)

  })

  function loopSlides() {
    $('.slideshow .slideshow-image').fadeOut(400, function() {
      $(this).css({backgroundImage: "url('" + imagePaths[imageIndex] + "')"})
      $('.slideshow .slideshow-viewer').css({backgroundImage: "url('" + imagePaths[imageIndex] + "')"})
    }).fadeIn(400)

    imageIndex = ( imageIndex + 1 ) % imagePaths.length
  }
})
