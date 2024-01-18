let front = document.querySelector('.face-front');
let back = document.querySelector('.face-back');
let flip = document.querySelector('.book-content');
let book = document.querySelectorAll('.book');
let port = document.querySelectorAll('#port');

let contZindex = 2;
let customZindex = 1;


for (let i = 0; i < book.length; i++) {
    book[i].style.zIndex = customZindex;
    customZindex--;

    book[i].addEventListener('click', function(e){
        let tgt = e.target;
        let bookThis = this;

        bookThis.style.zIndex = contZindex;
        contZindex++

        if(tgt.getAttribute('class') == 'face-front'){
            bookThis.style.zIndex = contZindex;
            contZindex += 20;
            setTimeout(function(){
                bookThis.style.transform = `rotateY(-180deg)`
            }, 500)
        }
        if(tgt.getAttribute('class') == 'face-back') {
            bookThis.style.zIndex = contZindex;
            contZindex += 20

             setTimeout(function(){
                bookThis.style.transform = `rotateY(0deg)`
            }, 500)
        }

        // if(tgt.getAttribute('id') == 'port') {
        //     flip.classList.add('transf-reset')
        //     flip.classList.remove('transf')
        // }

        // if(tgt.getAttribute('id') == 'transf') {
        //     flip.classList.remove('transf')
        //     flip.classList.add('transf-reset')
           
        // }
    })
}

