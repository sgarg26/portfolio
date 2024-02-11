gsap.registerPlugin(TextPlugin);

document.addEventListener("DOMContentLoaded", () => {
    VANTA.NET({
        el: "#vanta-bg",
        mouseControls: false,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
    });
    tl.play();
});

let tl = gsap
    .timeline()
    .to(".display-5", { duration: 1, text: "Hi, I'm Siddharth Garg" })
    .from(".navbar a", {
        opacity: 0,
        duration: 2,
        stagger: 0.25,
    });