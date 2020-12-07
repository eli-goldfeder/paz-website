const image1 = 'images/250X110668568400.jpg'
const image2 = 'images/paz_250x110103131473.jpg';
const image3 = 'images/banner_atar.jpg';

const images = [image1, image2, image3];
let index = 0;

 window.onload = () => setInterval(() => {
    index++;
    if (index === images.length) {
        index = 0;
    }
    const changingImg = document.getElementById('changing-img');
    changingImg.src = images[index];
}, 3000);

