(function ($,jQuery) {
	$( function() {
		$( ".video-embed-field-launch-modal" ).each( function() {
			let _video = $( this ).data( 'video-embed-field-modal' );
			let re = new RegExp( 'video\\/([0-9].*)\\?' );
			let video_id = _video.match( re )[1];
			let $image = $( this ).find( 'img' );

			$.ajax( {
				type: 'GET', url: '//vimeo.com/api/v2/video/' + video_id + '.json', dataType: 'json', success: function( data ) {
					let thumbnail_src = data[0].thumbnail_large;
					$image.prop( 'src', thumbnail_src );
				},
			} );
		} );
	} );

  $(document).ready(function() {
    $('.closepopup').click(function(){

      if(localStorage.getItem('popState') != 'shown'){
        $('.popup-one').hide();
        $(".page-node-type-home_page body").css("overflow", "unset");
        $(".page-node-type-home_page body").css("-webkit-appearance", "scroll");
        localStorage.setItem('popState','shown');
      }
      else {
        $('.popup-one').hide();
      }
    

    });

    if(localStorage.getItem('popState') == 'shown'){
      $('.popup-one').hide();
    }
    else {
      $(".page-node-type-home_page body").css("overflow", "hidden");
      $(".page-node-type-home_page body").css("position", "relative");
    }

  });

  $(document).ready(function () {
    $('a.site-logo, .sticky-top1 a.nav-link, .view-toolkit-view .views-row , .tookkittiles .views-row').each(function (i) {
        $(this).attr('tabindex', i + 1);
    });
    $( ".ui-accordion .ui-accordion-header, .video-embed-field-responsive-video img" ).each( function(i,v) { $( this).attr( "tabindex", 0 ); });
  });

  $( document ).ready(function() {

  
    $(window).scroll(function (event) {
      var navOffset = $('.headertopinner').height();
      console.log(navOffset);
      //console.log($(window).scrollTop());
      if($(window).scrollTop() > navOffset) {
        $('.sticky-top1').addClass('nonstiky');


      } else {
        $('.sticky-top1').removeClass('nonstiky');}
    });
  });

  
  
  $(window).resize(function () {
    $('.views_slideshow_cycle_main').each(function () {
        var cycleMain = $(this);
        var img_width = 0,
                img_height = 0;
        var clearCSS = {width: "auto", height: "auto"};
        var cycle = cycleMain.children('.views_slideshow_cycle_teaser_section');
        cycleElements = cycle.data("cycle.opts");
        cycle.css(clearCSS);
        cycleMain.find('.views_slideshow_cycle_slide').each(function (i) {
            $(this).css(clearCSS);
            var tmp_img_width = $(this).width();
            var tmp_img_height = $(this).height();
            if (tmp_img_width > img_width)
                img_width = tmp_img_width;
            if (tmp_img_height > img_height)
                img_height = tmp_img_height;
            cycleElements.elements[i].cycleW = tmp_img_width;
            cycleElements.elements[i].cycleH = tmp_img_height;
            $(this).css({width: tmp_img_width, height: tmp_img_height});
        });
        cycleMain.height(img_height);
        cycle.css({width: img_width, height: img_height});
        cycle.data("cycle.opts.elements", cycleElements);
    });
});// Fin de $(window).resize(function)

})(jQuery);


