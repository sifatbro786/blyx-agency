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
        }, 33);
    },
});
tl.to(".line h2", {
    animationName: "anime",
    opacity: 1,
});
tl.to("#loader", {
    opacity: 0,
    duration: 0.2,
    delay: 3,
});
tl.from("#page1", {
    y: 1600,
    delay: 0.2,
    duration: 0.5,
    opacity: 0,
    ease: Power4,
});
tl.to("#loader", {
    display: "none",
});
