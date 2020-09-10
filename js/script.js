$(document).ready(function () {
  // Open Nav
  $(".burger-menu").on("click", function (e) {
    e.preventDefault();

    let sideNav = $(".navigation");

    sideNav.addClass("open");
  });

  // Pin Nav
  $(".nav-options a").on("click", function (e) {
    e.preventDefault();

    let pinIt = $(".navigation");
    let pinAnimation = $(".nav-options a");
    let navContentPosition = $(".nav-items-wrapper");
    let closeNav = $(".navigation");

    pinIt.toggleClass("pin-down");
    pinAnimation.toggleClass("pin-it");
    navContentPosition.toggleClass("fixed");

    if (pinIt.hasClass() !== "pin-down") {
      closeNav.removeClass("open");
    }
  });

  // --------------------------------------------------------------------------------//
  // Smooth Scroll

  let scrollLink = $(".scroll");

  scrollLink.click(function (e) {
    e.preventDefault();

    $("body, html").animate(
      {
        scrollTop: $(this.hash).offset().top - -20,
      },
      1000
    );
  });

  // Active link switching

  $(window).scroll(function () {
    let scrollbarLocation = $(this).scrollTop();

    scrollLink.each(function () {
      let sectionOffset = $(this.hash).offset().top;

      if (sectionOffset <= scrollbarLocation) {
        $(this).parent().addClass("active");
        $(this).parent().siblings().removeClass("active");
      }
    });
  });
});
