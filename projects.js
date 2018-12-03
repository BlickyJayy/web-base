$(document).ready(function() {
  $('.project-filter a').click(function() {
    var selected = $(this).text().toLowerCase()
    if ( selected == 'all') {
      $('.project').fadeIn(200)
      $('.project').parent('a').fadeIn(200)
    } else {
      $('.project').filter('.' + selected).fadeIn(200).parent('a').fadeIn(200)
      $('.project').not('.' + selected).fadeOut(200).parent('a').fadeOut(200)
    }
  })
})
