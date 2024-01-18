import {createProjects} from "./js/projects.js"
import { lerp } from "./js/utils.js";






document.querySelector('#menu-btn').onclick = () =>{
    document.querySelector('#menu-btn').classList.toggle('fa-times');
    document.querySelector('.menu').classList.toggle('active');
}

let links = document.querySelectorAll('.menu-item');
let linkImages = document.querySelectorAll('.hover-reveal__img')


links.forEach((link, idx) => {
    link.addEventListener('mousemove', (e) => {
        link.children[1].style.opacity = 1;
        link.children[0].style.zIndex = 3;
        link.children[1].style.transform = `translate(${e.clientX - 300}px, -${e.clientY / 3}px) rotate(${e.clientX / 50}deg)`
        linkImages[idx].style.transform = `scale(1, 1)`
        link.style.zIndex = 2
    })

    link.addEventListener('mouseleave', (e) => {
        link.children[1].style.opacity = 0
        link.children[1].style.transform = `translate(${e.clientX}pageXOffset, -300px)`
        linkImages[idx].style.transform = `scale(0.8, 0.8)`
        link.style.zIndex = 0
    })
})







//Reveal service 

const allServices = document.querySelectorAll('.services')
const revealService = function(entries, observer) {
    const [entry] = entries;
    console.log(entry);
    if(!entry.isIntersecting) return;

    entry.target.classList.remove('service--hidden')
}
const serviceObserver = new IntersectionObserver(revealService, {
    root: null,
    threshold: 0.7,

})

allServices.forEach(function(service) {
    serviceObserver.observe(service);
    service.classList.add('service--hidden');
})

//Horizontal Scroll


createProjects()

const projectsSticky = document.querySelector('.projects__sticky')
let projectSlider = document.querySelector('.projects__slider')
const main = document.querySelector('main')


let projectTargetX = 0
let projectCurrentX = 0

let percentages = {
    small: 700,
    medium: 300,
    large: 100
}

let limit = window.innerWidth <= 600 ? percentages.small :
            window.innerWidth <= 1100 ? percentages.medium :
            percentages.large

function setLimit() {
let limit = window.innerWidth <= 600 ? percentages.small :
            window.innerWidth <= 1100 ? percentages.medium :
            percentages.large

}

window.addEventListener('resize', setLimit)


function animateProjects() {
    let offsetTop = projectsSticky.parentElement.offsetTop
    let percentage = ((main.scrollTop - offsetTop) / window.innerHeight) * 100
     percentage = percentage < 0 ? 0 : percentage > limit ? limit : percentage
    projectTargetX = percentage
    projectCurrentX = lerp(projectCurrentX, projectTargetX, .1)
    projectSlider.style.transform = `translate3d(${-(projectCurrentX)}dvw, 0, 0)`
}


//Circle animation

const circleSection = document.getElementById('circle__section')
const circle = document.querySelector('.circle');

function scrollCircle() {
    let {top}= circleSection.getBoundingClientRect();
    let scaleTop = Math.abs(top);
    let scale = (scaleTop / window.innerHeight)
    scale = scale < 0 ? 0 : scale > 1 ? 1 : scale
    if(top <= 0) {
        circle.style.transform = `translate(-50%, -50%) scale(${scale})`
    }else {
        circle.style.transform = `translate(-50%, -50%) scale(${0})`
    }

    
}

function animate() {
    animateProjects();
    requestAnimationFrame(animate)
}

animate()

main.addEventListener('scroll', () => {
    scrollCircle()
})


// text reveal section


let paragraphs = [...document.querySelectorAll('.paragraf')]
let spans = []
console.log(paragraphs);

paragraphs.forEach(paragraph => {
    let htmlString = '';
    let pArray = paragraph.textContent.split('')
    for(let i = 0; i < pArray.length; i++) {
        htmlString += `<span class="spanuri">${pArray[i]}</span>`
    }

    paragraph.innerHTML = htmlString
})


spans = [...document.querySelectorAll('.spanuri')]

function revealSpans() {
    for(let i = 0;i < spans.length; i++) {
       
       let {left, top} = spans[i].getBoundingClientRect();
       top = top - (window.innerHeight * .65)
       let opacityValue = 1 - ((top * .01) + (left * 0.001)) < 0 ? 0 : 1 - ((top * .01) + (left * 0.001)).toFixed(3);
       opacityValue = opacityValue > 1 ? 1 : opacityValue.toFixed(3);
       spans[i].style.opacity = opacityValue
    }
}


main.addEventListener('scroll', () => {
    revealSpans()
})
revealSpans()


//Accordion section


const accordion = document.querySelector('.accordion')


accordion.addEventListener('click', (e) => {
    const activePanel = e.target.closest(".accordion-panel")
    if(!activePanel) return;
    toggleAccordion(activePanel)

})

function toggleAccordion(panelToActivate) {
    const buttons = panelToActivate.parentElement.querySelectorAll('button')
    const contents = panelToActivate.parentElement.querySelectorAll('.accordion-content')
    buttons.forEach((button) => {
        button.setAttribute("aria-expanded", false)
    })
      contents.forEach((content) => {
        content.setAttribute("aria-hidden", true)
    })


    panelToActivate.querySelector('button').setAttribute('aria-expanded', true)
    panelToActivate.querySelector('.accordion-content').setAttribute('aria-hidden', false)
}

const sectionFive = document.querySelectorAll('.accordion')


const AppearOptions = {
  root: null,
  threshold: 1
}


const accordionObserver = new IntersectionObserver(function(entries, accordionObserver){
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return
    } else {
      entry.target.classList.add('animated')
      accordionObserver.unobserve(entry.target)
    }
  })
},
AppearOptions)

sectionFive.forEach(section => {
  accordionObserver.observe(section)
})




//SLIDER SECTION


let items = document.querySelectorAll('.slider .list .item')
let next = document.getElementById('next')
let prev = document.getElementById('prev')
let thumbnails = document.querySelectorAll('.thumbnail .item')

//config param

let countItem = items.length;
let itemActive = 0;

// event next click

next.onclick = function() {
    itemActive = itemActive + 1;
    if(itemActive >= countItem) {
        itemActive = 0
    }
    showSlider();

}
//event prev click

prev.onclick = function() {
    itemActive = itemActive - 1;
    if(itemActive < 0) {
        itemActive = countItem - 1
    }
    showSlider()
}

// auto run slider
let refreshInterval = setInterval(() => {
    next.click();
}, 7000)

function showSlider() {
    // remove the old item active

    let itemActiveOld = document.querySelector('.slider .list .item.triggered')
    let thumbnailActiveOld = document.querySelector('.thumbnail .item.triggered')
    itemActiveOld.classList.remove('triggered');
    thumbnailActiveOld.classList.remove('triggered');

    //active new item

    items[itemActive].classList.add('triggered')
    thumbnails[itemActive].classList.add('triggered')


    //clear auto time run slider
    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => {
        next.click();

    }, 7000)
}

//click thumbnail


thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        itemActive = index;
        showSlider()
    })
})






//Footer 



