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

  // Handle popup close and localStorage
  $(".closepopup").click(function () {
    if (localStorage.getItem("popState") !== "shown") {
      $(".popup-one").hide();
      $(".page-node-type-home_page body").css("overflow", "unset");
      $(".page-node-type-home_page body").css("-webkit-appearance", "scroll");
      localStorage.setItem("popState", "shown");
    } else {
      $(".popup-one").hide();
    }
  });

  if (localStorage.getItem("popState") === "shown") {
    $(".popup-one").hide();
  } else {
    $(".page-node-type-home_page body").css("overflow", "hidden");
    $(".page-node-type-home_page body").css("position", "relative");
  }
});
