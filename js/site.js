jQuery( document ).ready(function() {
  var readjust = function() {
    var windowheight = jQuery(window).height();
    var scrollposition = jQuery(window).scrollTop();
    if (scrollposition >= (windowheight/3)) {
      jQuery('.page-fill img').hide();
    } else {
      var percent = Math.round(((100/(windowheight/3))*scrollposition) * 100) / 100;
      jQuery('.page-fill img').show().css({ 'opacity' : (1-(percent/100)) });
    }
    if (scrollposition >= (windowheight-jQuery('.page-header').height())) {
      jQuery('.page-header').addClass('overflow');
      jQuery('.page-wrap').removeClass('overflow');
    } else {
      jQuery('.page-header').removeClass('overflow');
      jQuery('.page-wrap').addClass('overflow');
    }
  };

  jQuery(window).scroll(readjust);
  jQuery(window).resize(readjust);
});
