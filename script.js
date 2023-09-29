const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
});
function videoConAnimation() {
    var videoCon = document.querySelector("#videoContainer")
    var playBtn = document.querySelector("#play")
    videoCon.addEventListener("mouseenter", function () {
        gsap.to(playBtn, {
            scale: 1,
            opacity: 1,
        })
    })

    videoCon.addEventListener("mouseleave", function () {
        gsap.to(playBtn, {
            scale: 0,
            opacity: 0
        })
    })

    videoCon.addEventListener("mouseleave", function (dets) {
        gsap.to(playBtn, {
            left: dets.x - 80,
            top: dets.y
        })
    })
}
videoConAnimation();
function loadingAnimation() {
    gsap.from("#page1 h1", {
        y: 100,
        opacity: 0,
        delay: 0.5,
        deration: 1,
        stagger: 0.3,
    })
    gsap.from("#page1 #videoContainer", {
        scale: 0.9,
        opacity: 0,
        delay: 1,
        deration: 0.3,
        stagger: 0.3,
    })
}
loadingAnimation()

const cur = document.getElementById("cursor")
cur.addEventListener("mousemove", function (dets) {
    gsap.to(cur, {
        left: dets.x,
        left: dets.y
    })
})