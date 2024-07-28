(function ($, jQuery) {
  $(function () {
    $(".video-embed-field-launch-modal").each(function () {
      let _video = $(this).data("video-embed-field-modal");
      let re = new RegExp("video\\/([0-9].*)\\?");
      let video_id = _video.match(re)[1];
      let $image = $(this).find("img");

      $.ajax({
        type: "GET",
        url: "//vimeo.com/api/v2/video/" + video_id + ".json",
        dataType: "json",
        success: function (data) {
          let thumbnail_src = data[0].thumbnail_large;
          $image.prop("src", thumbnail_src);
        },
      });
    });
  });

  $(document).ready(function () {
    var currentUrl = window.location.href;

    // Check for "es" in URL and update text
    if (currentUrl.indexOf("es") !== -1) {
      var pdfLink = $(
        ".field--name-field-preview-pdf a.file-download.file-download-pdf"
      );
      if (pdfLink.length) {
        pdfLink.html("Vista previa");
      } else {
        console.log("PDF link not found");
      }
    }

    // Hide and update descriptions for node 9
    if ($(".page-node-9").length) {
      $(".page-node-9 .paragraph .field--name-field-description").hide();
      $(
        ".page-node-9 .paragraph--type--toolkit .field--name-field-tiles .field__item"
      ).each(function () {
        var desc = $(this)
          .find(".paragraph .field--name-field-description")
          .text();
        if (desc) {
          $(this).find("a.file-download:not(.file-download-pdf)").html(desc);
        }
        console.log("desc: " + desc);
      });
    } else {
      console.log("Node 9 not found");
    }

    // Hide and update descriptions for node 12
    if ($(".page-node-12").length) {
      $(".page-node-12 .paragraph .field--name-field-description").hide();
      $(
        ".page-node-12 .paragraph--type--toolkit .field--name-field-tiles .field__item"
      ).each(function () {
        var desc = $(this)
          .find(".paragraph .field--name-field-description")
          .text();
        if (desc) {
          $(this).find("a.file-download").html(desc);
        }
      });
    } else {
      console.log("Node 12 not found");
    }

    // Hide and update descriptions for node 13
    if ($(".page-node-13").length) {
      $(".page-node-13 .paragraph .field--name-field-description").hide();
      $(
        ".page-node-13 .paragraph--type--toolkit .field--name-field-tiles .field__item"
      ).each(function () {
        var desc = $(this)
          .find(".paragraph .field--name-field-description")
          .text();
        if (desc) {
          $(this).find("a.file-download").html(desc);
        }
      });
    } else {
      console.log("Node 13 not found");
    }
    // var currentUrl = window.location.href;
    // if (currentUrl.indexOf("es") !== -1) {
    //   $(this)
    //     .find(
    //       ".field--name-field-preview-pdf a.file-download.file-download-pdf"
    //     )
    //     .html("Vista previa");
    // }
    // $(".page-node-9 .paragraph .field--name-field-description").hide();
    // $(
    //   ".page-node-9 .paragraph--type--toolkit .field--name-field-tiles .field__item"
    // ).each(function () {
    //   var desc = $(this)
    //     .find(".paragraph .field--name-field-description")
    //     .text();
    //   if (desc != "") {
    //     $(this).find("a.file-download:not(.file-download-pdf)").html(desc);
    //   }
    //   console.log("desc: " + desc);
    // });

    // $(".page-node-12 .paragraph .field--name-field-description").hide();
    // $(
    //   ".page-node-12 .paragraph--type--toolkit .field--name-field-tiles .field__item"
    // ).each(function () {
    //   var desc = $(this)
    //     .find(".paragraph .field--name-field-description")
    //     .text();
    //   if (desc != "") {
    //     $(this).find("a.file-download").html(desc);
    //   }
    // });
    // $(".page-node-13 .paragraph .field--name-field-description").hide();
    // $(
    //   ".page-node-13 .paragraph--type--toolkit .field--name-field-tiles .field__item"
    // ).each(function () {
    //   var desc = $(this)
    //     .find(".paragraph .field--name-field-description")
    //     .text();
    //   if (desc != "") {
    //     $(this).find("a.file-download").html(desc);
    //   }
    // });

    $(".closepopup").click(function () {
      if (localStorage.getItem("popState") != "shown") {
        $(".popup-one").hide();
        $(".page-node-type-home_page body").css("overflow", "unset");
        $(".page-node-type-home_page body").css("-webkit-appearance", "scroll");
        localStorage.setItem("popState", "shown");
      } else {
        $(".popup-one").hide();
      }
    });

    if (localStorage.getItem("popState") == "shown") {
      $(".popup-one").hide();
    } else {
      $(".page-node-type-home_page body").css("overflow", "hidden");
      $(".page-node-type-home_page body").css("position", "relative");
    }
  });

  $(document).ready(function () {
    $(
      "a.site-logo, .sticky-top1 .nav-link, .dropdown-item, .view-toolkit-view .views-row , .tookkittiles .views-row"
    ).each(function (i) {
      $(this).attr("tabindex", i + 1);
    });
    $(
      ".ui-accordion .ui-accordion-header, .video-embed-field-responsive-video img"
    ).each(function (i, v) {
      $(this).attr("tabindex", 0);
    });
  });

  $(document).ready(function () {
    $(window).scroll(function (event) {
      var navOffset = $(".headertopinner").height();
      //console.log($(window).scrollTop());
      if ($(window).scrollTop() > navOffset) {
        $(".sticky-top1").addClass("nonstiky");
      } else {
        $(".sticky-top1").removeClass("nonstiky");
      }
    });
  });

  $(window).resize(function () {
    $(".views_slideshow_cycle_main").each(function () {
      var cycleMain = $(this);
      var img_width = 0,
        img_height = 0;
      var clearCSS = { width: "auto", height: "auto" };
      var cycle = cycleMain.children(".views_slideshow_cycle_teaser_section");
      cycleElements = cycle.data("cycle.opts");
      cycle.css(clearCSS);
      cycleMain.find(".views_slideshow_cycle_slide").each(function (i) {
        $(this).css(clearCSS);
        var tmp_img_width = $(this).width();
        var tmp_img_height = $(this).height();
        if (tmp_img_width > img_width) img_width = tmp_img_width;
        if (tmp_img_height > img_height) img_height = tmp_img_height;
        cycleElements.elements[i].cycleW = tmp_img_width;
        cycleElements.elements[i].cycleH = tmp_img_height;
        $(this).css({ width: tmp_img_width, height: tmp_img_height });
      });
      cycleMain.height(img_height);
      cycle.css({ width: img_width, height: img_height });
      cycle.data("cycle.opts.elements", cycleElements);
    });
  }); // Fin de $(window).resize(function)
})(jQuery);
