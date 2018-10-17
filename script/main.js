
const vouches = [
    {
        author: "Master Mirror @ MCM",
        review: "Worked with him on a project some time ago, a very adept and competent programmer. Would definitely recommend dealing with him."
    },
    {
        author: "Tarvik @ MCM",
        review: "Great Developer, along with a just a proactive and positive guy in general."
    },
    {
        author: "J. M",
        review: "This man needs a medal. Very fast, effecient, and you pay for what it's worth."
    },
    {
        author: "FunniQuit @ MCM",
        review: "This guy can code his a** off."
    },
    {
        author: "Nayalash Mohammad",
        review: "Fast, Friendly and Enthusiastic. An amazing Developer who loves to help people no matter their needs"
    }

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

let currentVouchIndex = 0;
let currentVouch;

function changeVouch() {
    currentVouchIndex++;
    if(currentVouchIndex >= vouches.length) {
        currentVouchIndex = 0;
    }
    currentVouch = vouches[currentVouchIndex];
    const vouchText = document.getElementById("vouch-text");
    const vouchAuthor = document.getElementById("voucher");
    vouchText.innerHTML = currentVouch.review;
    vouchAuthor.innerHTML = currentVouch.author;

    setTimeout(changeVouch, 4500);
}

function removePreloader() {
    setTimeout(() => {
        const preloader = document.getElementsByClassName("preloader-wrapper")[0];
        preloader.style.opacity = 1;
        //preloader.style.display = 'none';
        const fadeOut = setInterval(() => {
            preloader.style.opacity -= 0.005;
            if(preloader.style.opacity <= 0.05) {
                preloader.style.display = 'none';
                clearInterval(fadeOut);
            }
        }, 5);
    }, 3500);
}

window.onload = function () {
    removePreloader();
    const scrollDownButton = document.getElementsByClassName("ct-js-btn-scroll")[0];
    scrollDownButton.onclick = function () {
        var target = document.getElementById("projects");
        animate(document.scrollingElement || document.documentElement, "scrollTop", "", 0, target.offsetTop + 25, 750, true);
    }

    changeVouch();
};