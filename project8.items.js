

const posts = [];


const images = [
    'images/MASONRY18.jpg',
    'images/MASONRY1.jpg',
    'images/MASONRY2.jpg',
    'images/MASONRY16.jpg',
    'images/MASONRY4.jpg',
    'images/MASONRY5.jpg',
    'images/MASONRY6.jpg',
    'images/MASONRY7.jpg',
    'images/MASONRY8.jpg',
    'images/MASONRY9.jpg',
    'images/MASONRY10.jpg',
    'images/MASONRY17.jpg',
    
]

let imageIndex = 0;


for(let i = 1; i <= 80; i++){
    let item = {
        id: i,
        title: `Post ${i}`,
        image: images[imageIndex]

    }
    posts.push(item);
    imageIndex++;
    if(imageIndex > images.length - 1) imageIndex = 0
}




