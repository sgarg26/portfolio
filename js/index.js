gsap.registerPlugin(TextPlugin);

const DocListener = document.addEventListener

DocListener("DOMContentLoaded", () => {
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
    tl.play()
});

let tl = gsap.timeline()
    .to(".display-5", { duration: 1, text: "Hi, I'm Siddharth Garg" })
    .from(".navbar a", {
        opacity: 0,
        duration: 2,
        stagger: 0.25
    });

const projects = "-> I have worked extensively with creating script based and graphical mods for games like" +
    "the Witcher 3, and Starfield.\n\n-> I like learning about OS operations and have used Windows Libraries to build a Volume Wheel\n" +
    "\n-> I'm passionate about tools like Neovim, and have created an extensive configuration using Lua\n" +
    "   Check out more of my projects on Nexus Mods, and GitHub!"

const aboutMe = "Welcome to my portfolio! I'm a CS student at George Mason University. My interests " +
    "lie in writing code across diverse domains, including robotics and contributing to open source projects."

document.getElementById("projects-link").addEventListener("mouseup", () => {
    document.getElementsByClassName("modal-body")[0].innerText = projects
    document.getElementsByClassName("modal-header")[0].innerText = "Projects"
    document.getElementsByClassName("fs-4")[0].style.visibility = "visible"

})

document.getElementById("about-me-link").addEventListener("mouseup", () => {
    document.getElementsByClassName("modal-header")[0].innerText = "About Me"
    document.getElementsByClassName("modal-body")[0].innerText = aboutMe
    document.getElementsByClassName("fs-4")[0].style.visibility = "hidden"
})
