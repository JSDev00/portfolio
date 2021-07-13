jQuery(document).ready(function () {
  /* ---------------------------------------------------------------------- */
  /*	Custom Functions
	/* ---------------------------------------------------------------------- */

  // Logo
  var $logo = $("#logo");

  if (location.href.indexOf("#") != -1) {
    $logo.show();
  }
  // Show logo
  $(".menu .tabs a").click(function () {
    $logo.fadeIn("slow");
  });
  // Hide logo
  $(".tab-profile").click(function () {
    $logo.fadeOut("slow");
  });
  $("#blue-color").click(function (e) {
    $(".main-wrapper-resume").attr("id", "blue");
  });
  $("#yellow-color").click(function (e) {
    $(".main-wrapper-resume").attr("id", "yellow");
  });
  $("#green-color").click(function (e) {
    $(".main-wrapper-resume").attr("id", "green");
  });
  $("#red-color").click(function (e) {
    $(".main-wrapper-resume").attr("id", "red");
  });

  $(".setting-icon").click(function () {
    $(".color-box").toggleClass("main");
  });
  /* ---------------------------------------------------------------------- */
  /*	Resume
	/* ---------------------------------------------------------------------- */

  // Rating bars
  $(".skills li .rating").each(function (index, e) {
    // Vars
    var $ratNum = 7,
      $rat = $(e).attr("data-rat"),
      $point = "<span></span>";

    // Append points
    while ($ratNum > 0) {
      $(e).append($point);
      $ratNum--;
    }

    $(e)
      .find("span")
      .each(function (index, e) {
        if (index >= $rat) return false;
        // Append Disabled Rats
        $(e).animate({
          opacity: 1,
        });
      });
  });

  /* ---------------------------------------------------------------------- */
  /*	About
	/* ---------------------------------------------------------------------- */

  // Profile Photo Slider
  $(".photo-inner ul").carouFredSel({
    direction: "left",
    circular: true,
    auto: true,
    scroll: {
      items: 1,
      fx: "crossfade",
      duration: 1500,
      wipe: true,
    },
    swipe: {
      onTouch: true,
    },
    items: {
      width: 153,
    },
  });

  // $('.setting-icon').click(function () {
  // 	$(".color-box").toggleClass('main');
  // })

  var $catsfilter = $(".cats-filter");
  $catsfilter.find("a").click(function () {
    var currentOption = $(this).attr("data-filter");
    $(this).parent().parent().find("a").removeClass("current");
    $(this).addClass("current");
  });
  var $plist = $("#portfilio-list");
  var $pfilter = $("#portfilio-filter");
  $plist.isotope({
    filter: "*",
    layoutMode: "masonry",
    animationOptions: {
      duration: 750,
      easing: "linear",
    },
  });

  $pfilter.find("a").click(function () {
    var selector = $(this).attr("data-filter");
    $plist.isotope({
      filter: selector,
      animationOptions: {
        duration: 750,
        easing: "linear",
        queue: false,
      },
    });
    return false;
  });

  /* ---------------------------------------------------------------------- */
  /*	Menu
	/* ---------------------------------------------------------------------- */

  // Needed variables
  var $content = $("#content");

  // Run easytabs
  $content.easytabs({
    animate: true,
    updateHash: false,
    transitionIn: "slideDown",
    transitionOut: "slideUp",
    animationSpeed: 600,
    tabs: ".tmenu",
    tabActiveClass: "active",
  });

  // Hover menu effect
  $content.find(".tabs li a").hover(
    function () {
      $(this).stop().animate({ marginTop: "-7px" }, 200);
    },
    function () {
      $(this).stop().animate({ marginTop: "0px" }, 300);
    }
  );

  // Menu Navigation
  $(".menu .tabs").carouFredSel({
    responsive: true,
    direction: "left",
    circular: false,
    infinite: false,
    pagination: "#menu-controls",
    auto: false,
    scroll: {
      items: 1,
      duration: 300,
      wipe: true,
    },
    prev: {
      button: "#menu-prev",
      key: "right",
    },
    next: {
      button: "#menu-next",
      key: "left",
    },
    swipe: {
      onTouch: true,
    },
    items: {
      width: 140,
      visible: {
        min: 2,
        max: 5,
      },
    },
  });
  /* ---------------------------------------------------------------------- */
  /*	Cats Filter
	/* ---------------------------------------------------------------------- */

  var $catsfilter = $(".cats-filter");

  // Copy categories to item classes
  $catsfilter.find("a").click(function () {
    var currentOption = $(this).attr("data-filter");
    $(this).parent().parent().find("a").removeClass("current");
    $(this).addClass("current");
  });

  /* ---------------------------------------------------------------------- */
  /*	Portfolio
	/* ---------------------------------------------------------------------- */

  // Needed variables
  var $plist = $("#portfolio-list");
  var $pfilter = $("#portfolio-filter");

  // Run Isotope
  $plist.isotope({
    filter: "*",
    layoutMode: "masonry",
    animationOptions: {
      duration: 750,
      easing: "linear",
    },
  });

  // Isotope Filter
  $pfilter.find("a").click(function () {
    var selector = $(this).attr("data-filter");
    $plist.isotope({
      filter: selector,
      animationOptions: {
        duration: 750,
        easing: "linear",
        queue: false,
      },
    });
    return false;
  });
});
