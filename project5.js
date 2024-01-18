const sliderContainer = document.querySelector('.slider-container')
const slider = document.querySelector('.slider')
const images = Array.from(document.querySelectorAll('.slider-item img'))
console.log(images);


let clicked = false;
let xAxis
let x


sliderContainer.addEventListener('mouseup', () => {
    sliderContainer.style.cursor = 'grab';
})


sliderContainer.addEventListener('mousedown', (e) => {
    clicked = true
    xAxis = e.offsetX - slider.offsetLeft


    sliderContainer.style.cursor = 'grabbing'
     images.forEach(image => {
                image.classList.add('active')
            })
})


window.addEventListener('mouseup', () => {
    clicked = false

      images.forEach(image => {
                image.classList.remove('active')
            })
})


sliderContainer.addEventListener('mousemove', e => {
    if (!clicked) return;
    e.preventDefault();

    x = e.offsetX;
    slider.style.left = `${x - xAxis}px`
    checkSize()
})


function checkSize () {
    let sliderContainerOut = sliderContainer.getBoundingClientRect()
    let sliderIn = slider.getBoundingClientRect();


    if(parseInt(slider.style.left) > 0) {
        slider.style.left = `0px`
    } else if (sliderIn.right < sliderContainerOut.right) {
        slider.style.left = `-${sliderIn.width - sliderContainerOut.width}px`
    }
}