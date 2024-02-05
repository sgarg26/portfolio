gsap.registerPlugin(TextPlugin);

document.addEventListener("DOMContentLoaded", () => {
    VANTA.NET({
        el: "#vanta-bg",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
    });
});

let tl = gsap.timeline();
tl.to(".display-5", { duration: 2, text: "Hi, I'm Siddharth Garg" });
tl.from(".navbar", {
    opacity: 0,
    duration: 2,
});
