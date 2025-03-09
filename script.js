//? locomotive:
function locomotiveAnimation() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true,
    });
    locoScroll.on("scroll", ScrollTrigger.update);
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length
                ? locoScroll.scrollTo(value, 0, 0)
                : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed",
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
}

//? loader:
function loadingAnimation() {
    let tl = gsap.timeline();

    tl.from(".line h1", {
        y: 150,
        stagger: 0.25,
        duration: 0.6,
        delay: 0.3,
    });
    tl.from("#line1-part1", {
        opacity: 0,
        onStart: function () {
            let h5Timer = document.querySelector("#line1-part1 h5");
            let grow = 0;

            setInterval(() => {
                if (grow < 100) {
                    h5Timer.innerHTML = grow++;
                } else {
                    h5Timer.innerHTML = grow;
                }
            }, 40);
        },
    });
    tl.to(".line h2", {
        animationName: "anime",
        opacity: 1,
    });
    tl.to("#loader", {
        opacity: 0,
        duration: 0.2,
        delay: 4,
    });
    tl.from("#page1", {
        y: 1600,
        backgroundColor: "#000",
        delay: 0.2,
        duration: 1,
        ease: Power4,
    });
    tl.to("#loader", {
        display: "none",
    });
    tl.from("#nav, .demo, #page2", {
        y: -25,
        opacity: 0,
        duration: 0.5,
    });
    tl.from(".hero h2, .hero h3", {
        y: 120,
        stagger: 0.2,
        opacity: 0,
    });
}

//? cursor:
function cursorAnimation() {
    Shery.mouseFollower({
        skew: true,
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        duration: 0.3,
    });
    Shery.makeMagnet("#nav-part2 h4", {
        duration: 0.3,
    });

    let videoContainer = document.querySelector("#video-container");
    let video = document.querySelector("#video-container video");

    videoContainer.addEventListener("mouseenter", () => {
        videoContainer.addEventListener("mousemove", (dets) => {
            gsap.to(".mousefollower", {
                opacity: 0,
            });
            gsap.to("#video-cursor", {
                left: dets.x - 490,
                y: dets.y - 220,
            });
        });
    });

    videoContainer.addEventListener("mouseleave", () => {
        gsap.to(".mousefollower", {
            opacity: 1,
        });
        gsap.to("#video-cursor", {
            left: "70%",
            top: "-11%",
        });
    });

    let flag = 0;
    videoContainer.addEventListener("click", () => {
        if (flag == 0) {
            video.play();
            video.style.opacity = 1;

            document.querySelector(
                "#video-cursor",
            ).innerHTML = `<i class="ri-pause-mini-fill"></i>`;
            gsap.to("#video-cursor", {
                scale: 0.5,
            });
            flag = 1;
        } else {
            video.pause();
            video.style.opacity = 0;

            document.querySelector("#video-cursor").innerHTML = `<i class="ri-play-mini-fill"></i>`;
            gsap.to("#video-cursor", {
                scale: 1,
            });
            flag = 0;
        }
    });
}

//? shery animation:
function sheryAnimation() {
    Shery.imageEffect(".image-box", {
        style: 5,
        config: {
            a: { value: 0.69, range: [0, 30] },
            b: { value: 0.76, range: [-1, 1] },
            zindex: { value: -9996999, range: [-9999999, 9999999] },
            aspect: { value: 0.7272695760684946 },
            ignoreShapeAspect: { value: true },
            shapePosition: { value: { x: 0, y: 0 } },
            shapeScale: { value: { x: 0.5, y: 0.5 } },
            shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
            shapeRadius: { value: 0, range: [0, 2] },
            currentScroll: { value: 0 },
            scrollLerp: { value: 0.07 },
            gooey: { value: true },
            infiniteGooey: { value: false },
            growSize: { value: 4, range: [1, 15] },
            durationOut: { value: 1, range: [0.1, 5] },
            durationIn: { value: 0.7, range: [0.1, 5] },
            displaceAmount: { value: 0.5 },
            masker: { value: true },
            maskVal: { value: 1, range: [1, 5] },
            scrollType: { value: 0 },
            geoVertex: { range: [1, 64], value: 1 },
            noEffectGooey: { value: true },
            onMouse: { value: 1 },
            noise_speed: { value: 0.61, range: [0, 10] },
            metaball: { value: 0.64, range: [0, 2] },
            discard_threshold: { value: 0.5, range: [0, 1] },
            antialias_threshold: { value: 0, range: [0, 0.1] },
            noise_height: { value: 0.43, range: [0, 2] },
            noise_scale: { value: 7.63, range: [0, 100] },
        },
        gooey: true,
    });
}

//? flagAnimation:
function flagAnimation() {
    document.addEventListener("mousemove", (dets) => {
        gsap.to("#flag", {
            x: dets.x,
            y: dets.y,
        });
    });

    document.querySelector("#hero3").addEventListener("mouseenter", () => {
        gsap.to("#flag", {
            opacity: 1,
        });
    });
    document.querySelector("#hero3").addEventListener("mouseleave", () => {
        gsap.to("#flag", {
            opacity: 0,
        });
    });
}

//? scrollTriggerAnimation:
function scrollTriggerAnimation() {
    gsap.from("#page3-content h1", {
        y: 50,
        delay: 0.3,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
            trigger: "#page3-content h1",
            scroller: "#main",
            start: "top 100%",
        },
    });
    gsap.from("#page3-content .underline2", {
        width: "0%",
        delay: 0.3,
        duration: 2,
        scrollTrigger: {
            trigger: "#page3-content .underline2",
            scroller: "#main",
            start: "top 100%",
        },
    });
    gsap.from("#image-div-container .page3-circle1", {
        y: "-200",
        delay: 0.3,
        duration: 1,
        scrollTrigger: {
            trigger: "#image-div-container",
            scroller: "#main",
            start: "top 100%",
        },
    });
    gsap.from("#page4-content h1", {
        y: 50,
        delay: 0.3,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
            trigger: "#page4-content",
            scroller: "#main",
            start: "top 100%",
        },
    });
    gsap.from("#page4-content .underline", {
        width: "0%",
        delay: 0.8,
        duration: 2,
        scrollTrigger: {
            trigger: "#page4-content",
            scroller: "#main",
            start: "top 100%",
        },
    });
    gsap.from("#page4-content .a1", {
        width: "0%",
        delay: 0.5,
        duration: 2,
        scrollTrigger: {
            trigger: "#page4-content",
            scroller: "#main",
            start: "top 100%",
        },
    });
    gsap.from("#footer h1", {
        y: 50,
        delay: 0.3,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
            trigger: "#footer",
            scroller: "#main",
            start: "top 100%",
        },
    });
    gsap.from("#footer .b1", {
        width: "0%",
        delay: 0.5,
        duration: 2,
        scrollTrigger: {
            trigger: "#footer",
            scroller: "#main",
            start: "top 100%",
        },
    });
    gsap.from("#footer .underline3", {
        width: "0%",
        delay: 0.5,
        duration: 2,
        scrollTrigger: {
            trigger: "#footer",
            scroller: "#main",
            start: "top 100%",
        },
    });
    gsap.from("#footer #footer-div .box h6", {
        y: -30,
        opacity: 0,
        delay: 0.8,
        duration: 1,
        scrollTrigger: {
            trigger: "#footer",
            scroller: "#main",
            start: "top 100%",
        },
    });
    gsap.from("#footer #footer-div .box h5", {
        y: 30,
        opacity: 0,
        delay: 1,
        duration: 1,
        stagger: 0.1,
        scrollTrigger: {
            trigger: "#footer",
            scroller: "#main",
            start: "top 100%",
        },
    });
    gsap.from("#footer p", {
        opacity: 0,
        delay: 1,
        duration: 2,
        scrollTrigger: {
            trigger: "#footer",
            scroller: "#main",
            start: "top 100%",
        },
    });
}

//? getYear:
document.querySelector("#year").textContent = new Date().getFullYear();

loadingAnimation();
cursorAnimation();
locomotiveAnimation();
sheryAnimation();
flagAnimation();
scrollTriggerAnimation();
