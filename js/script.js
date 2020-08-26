var rule = CSSRulePlugin.getRule(".intro-title span:after");

/*
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
});
gsap.to(rule, { cssRule: { scaleY: 0 }, duration: 1 });

gsap.from(".intro-image", {
  duration: 1,
  x: 100,
  opacity: 0,
});
*/

var tl = gsap.timeline({ defaults: { duration: 1 } });

tl.from(".intro-image", { x: 100, opacity: 0, ease: "Power1.easeInOut" })
  .to(".rsd-logo", {
    opacity: 1,
    y: 50,
    ease: "Power2.easeInOut",
  })
  .to(
    rule,
    {
      duration: 1.5,
      cssRule: { scaleY: 0 },
      ease: "Power3.easeInOut",
      delay: 0.5,
    },
    "-=1.5"
  );
