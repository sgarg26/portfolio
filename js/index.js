gsap.registerPlugin(TextPlugin)
document.addEventListener("DOMContentLoaded", () => {
    VANTA.NET({
        el: "#vanta-bg",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00
    })
})

gsap.to(".display-5", { duration: 2, text: "Hi, I'm Siddharth Garg", delay: 1 })