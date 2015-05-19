// $(function() {
//   $('.previews a').on('click',function(e){
//     e.preventDefault();
//     var src = $(this).data('full');
//     $('.large img').attr('src', src);
//     $('.day').removeClass('open');
//     $(this).parents('.day').addClass('open');
//   });
//   $('.large img').on('click', function() {
//     var full = $(this).attr('src');
//     $.fancybox.open({
//       href: full
//     });
//   });
//   var currentdate = new Date();
//   var datetime = currentdate.getHours() + ":" 
//   + currentdate.getMinutes() + ":" + currentdate.getSeconds();
//   $('.locale p').text(datetime);
// });

$(function() {
  $('.previews a').on('click',function(e){
    e.preventDefault();
    var src = $(this).data('full');
    $('.large img').attr('src', src);
    $('.day').removeClass('open');
    $(this).parents('.day').addClass('open');
  });
  $('.large img').on('click', function() {
    var full = $(this).attr('src');
    $.fancybox.open({
      href: full
    });
  });

  function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    var liveTime = h + ":" + m + ":" + s;
    $('.locale p').html(liveTime); 
    var t = setTimeout(function(){startTime()},500);
  }

  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }

  startTime();
});