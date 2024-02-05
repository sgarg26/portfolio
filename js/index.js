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
    tl.play()
});

let tl = gsap.timeline()
    .to(".display-5", { duration: 1, text: "Hi, I'm Siddharth Garg" })
    .from(".navbar a", {
        opacity: 0,
        duration: 2,
        stagger: 0.25
    });


const aboutMe = "Welcome to my portfolio! I'm Siddharth Garg, a CS student at George Mason University. " +
    "My interests lie in crafting code across diverse domains, including robotics and contributing" +
    " to open source projects."

const 