/* let tl = gsap.timeline();

tl.from(".box", { duration: 2.5, opacity: 0, scale: 0.1 });
tl.from(".circle", {
    duration: 1,
    opacity: 0,
    y: "random(-100,100)",
    onComplete: () => {
        console.log("hello there, animation complete");
    },
});
*/
document.getElementById("trialBtn").addEventListener("click", () => {
    console.log("clicked");
});

