let current = 0;
let target = 0;
let ease = 0.1;
let windowWidth, containerHeight, imageHeight, skewDiff;
let offsetStart = 0;
let offsetEnd = 0;



window.addEventListener('scroll', () => {
 document.documentElement.style.setProperty('--scroll', ( window.pageYOffset - offsetStart ) / ( document.body.offsetHeight - offsetStart - offsetEnd - window.innerHeight ));
 }, false);




let container = document.querySelector('.container')
let images = Array.from(document.querySelectorAll('.img_wrap'))

console.log(images);

images.forEach((image, idx) => {
    image.style.backgroundImage = `url(./images/1${idx + 1}.jpg)`
})


function lerp(start, end, t) {
    return start * (1 - t) + end * t
}

function setTransform(el, transform) {
    el.style.transform = transform;
}

function setupAnimation() {
    windowWidth = window.innerWidth;
    containerHeight = container.getBoundingClientRect().height;
    imageHeight = containerHeight / (windowWidth > 760 ? images.length / 2 : images.length)

    document.body.style.height = `${containerHeight}px`
    smoothScroll()
}


function smoothScroll() {
    current = lerp(current, target, ease)
    current = parseFloat(current.toFixed(2));
    target = window.scrollY
    skewDiff = (target - current) * .015
    setTransform(container, `translateY(${-current}px) skewY(${skewDiff}deg)`)
    updateImages()
    requestAnimationFrame(smoothScroll)
}

function updateImages() {
    let ratio = current /innerHeight;
    let intersectionRatioIndex, intersectionRatioValue;

    images.forEach((image, idx) => {
        intersectionRatioIndex = windowWidth > 760 ? parseInt(idx / 2) : idx
        intersectionRatioValue = ratio - intersectionRatioIndex
        setTransform(image, `translateY(${intersectionRatioValue * 55}px)`)
    })
}

setupAnimation()