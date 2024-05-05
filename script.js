// SCROLL TRIGGER CODEPEN JS FILE ....

function locomotiveCodepen() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector(".main").style.transform
      ? "transform"
      : "fixed",
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}

locomotiveCodepen();

function videoElement() {
  // Listening to the video element
  let clip = document.querySelector(".video1>video");
  let clip2 = document.querySelector(".video2>video");
  let clip3 = document.querySelector(".video3>video");
  let clip4 = document.querySelector(".video4>video");
  let clip5 = document.querySelector(".video5>video");
  let clip6 = document.querySelector(".video6>video");
  let clip7 = document.querySelector(".video7>video");
  let clip8 = document.querySelector(".video8>video");
  let clip9 = document.querySelector(".video9>video");
  let clip10 = document.querySelector(".video10>video");

  /* Adding the event listeners on the video to play/pause the video. */
  clip.addEventListener("mouseover", function (e) {
    clip.play();
  });

  clip2.addEventListener("mouseover", function (e) {
    clip2.play();
  });

  clip3.addEventListener("mouseover", function (e) {
    clip3.play();
  });

  clip4.addEventListener("mouseover", function (e) {
    clip4.play();
  });
  clip5.addEventListener("mouseover", function (e) {
    clip5.play();
  });
  clip6.addEventListener("mouseover", function (e) {
    clip6.play();
  });
  clip7.addEventListener("mouseover", function (e) {
    clip7.play();
  });
  clip8.addEventListener("mouseover", function (e) {
    clip8.play();
  });
  clip9.addEventListener("mouseover", function (e) {
    clip9.play();
  });
  clip10.addEventListener("mouseover", function (e) {
    clip10.play();
  });

  /* Applying the mouse out event to pause the video */
  clip.addEventListener("mouseout", function (e) {
    clip.pause();
  });

  clip2.addEventListener("mouseout", function (e) {
    clip2.pause();
  });

  clip3.addEventListener("mouseout", function (e) {
    clip3.pause();
  });
  clip4.addEventListener("mouseout", function (e) {
    clip4.pause();
  });
  clip5.addEventListener("mouseout", function (e) {
    clip5.pause();
  });
  clip6.addEventListener("mouseout", function (e) {
    clip6.pause();
  });
  clip7.addEventListener("mouseout", function (e) {
    clip7.pause();
  });
  clip8.addEventListener("mouseout", function (e) {
    clip8.pause();
  });
  clip9.addEventListener("mouseout", function (e) {
    clip9.pause();
  });
  clip10.addEventListener("mouseout", function (e) {
    clip10.pause();
  });
}
videoElement();

gsap.to(".fleftelem", {
  ScrollTrigger: {
    trigger: ".featuredImages",
    pin: true,
    start: "top top",
    end: "bottom bottom",
    endTrigger: ".lastParagra",
    scrub: 1,
  },
  y: "-100%",
  ease: Power1,
});
