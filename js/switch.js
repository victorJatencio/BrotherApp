// jQuery

var visibleSection = 0;

function showSection() {
  $(".section").hide();
  $(".section:eq(" + visibleSection + ")").show();

  gsap.from(".rsd-logo", {
    opacity: 0,
    duration: 1,
    y: -50,
    ease: "Power2.easeInOut",
  });

  gsap.from(".intro-title", {
    duration: 1,
    y: -50,
    opacity: 0,
    delay: 0.4,
  });

  gsap.from(".slideIn", {
    duration: 1,
    y: -50,
    opacity: 0,
    delay: 0.4,
  });
}

showSection();

function showNext() {
  if (visibleSection == $(".section").length - 1) {
    visibleSection = 0;
  } else {
    visibleSection++;
  }
  slideMove();

  setTimeout(function () {
    showSection();
  }, 1000);
}

function showPrev() {
  if (visibleSection == 0) {
    visibleSection = $(".section").length - 1;
  } else {
    visibleSection--;
  }
  slideMove();
  setTimeout(function () {
    showSection();
  }, 1000);
}

function slideMove() {
  $("#slideLayer").animate({ left: "-170%" }, 1300, "swing", function () {
    $("#slideLayer").css("left", "100%");
  });
}
