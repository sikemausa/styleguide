function showMore(){
  $('.nav-item').css('display', 'block');
  $('#logo').css('display', 'none');
}

function showLess(){
  $('.nav-item').css('display', 'none');
}

function changeShowStatus(){
  if($('.showbutton').html() === 'Show More'){
  $('.showbutton').html('Show Less');
}
  else {
    $('.showbutton').html('Show Less');
  }
}

$('.showbutton').on('click', function(){
  if($('.showbutton').html() === 'Show More'){
    showMore();
    $('.showbutton').html('Show Less');
  }
    else {
      showLess();
      $('.showbutton').html('Show More');
    }
});

$(window).resize(function() {
 if ($(window).width() > 768) {
   $('.nav-item').css('display', 'block');
 }
 else {
   $('.nav-item').css('display', 'none');
 }
});
