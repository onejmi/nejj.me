
const vouches = [
    {
        author: "James Markuson",
        review: "Scarger is the best developer!"
    },
    {
        author: "Scuffi",
        review: "Knows exactly what he's doing"
    },
    {
        author: "Bob",
        review: "This man needs a medal. Very fast, effecient, and you pay for what it's worth."
    },

]



function animate(elem, style, unit, from, to, time, prop) {
    if (!elem) {
        return;
    }
    var start = new Date().getTime(),
        timer = setInterval(function () {
            var step = Math.min(1, (new Date().getTime() - start) / time);
            if (prop) {
                elem[style] = (from + step * (to - from))+unit;
            } else {
                elem.style[style] = (from + step * (to - from))+unit;
            }
            if (step === 1) {
                clearInterval(timer);
            }
        }, 25);
    if (prop) {
          elem[style] = from + unit;
    } else {
          elem.style[style] = from + unit;
    }
}

window.onload = function () {
    var scrollDownButton = document.getElementsByClassName("ct-js-btn-scroll")[0];
    scrollDownButton.onclick = function () {
        var target = document.getElementById("projects");
        animate(document.scrollingElement || document.documentElement, "scrollTop", "", 0, target.offsetTop + 25, 750, true);
    }
};