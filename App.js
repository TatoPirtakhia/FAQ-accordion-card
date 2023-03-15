const title1 = document.querySelector('.title1')
const title2 = document.querySelector('.title2')
const title3 = document.querySelector('.title3')
const title4 = document.querySelector('.title4')
const title5 = document.querySelector('.title5')


const text1 = document.querySelector('.one')
const text2 = document.querySelector('.two')
const text3 = document.querySelector('.three')
const text4 = document.querySelector('.four')
const text5 = document.querySelector('.five')

const image1 = document.getElementById('Image')
const image2 = document.getElementById('Image2')
const image3 = document.getElementById('Image3')
const image4 = document.getElementById('Image4')
const image5 = document.getElementById('Image5')

let isTextVisible = false;

title1.addEventListener('click', () => {
    // text1.classList.remove('enable')
    text2.classList.remove('enable')
    text3.classList.remove('enable')
    text4.classList.remove('enable')
    text5.classList.remove('enable')


    title4.classList.remove('bold_text')
    title2.classList.remove('bold_text')
    title3.classList.remove('bold_text')
    title5.classList.remove('bold_text')

    
    text1.classList.toggle('enable')
    title1.classList.toggle('bold_text')
    image1.classList.toggle('rotated')
    image2.classList.remove('rotated')
    image3.classList.remove('rotated')
    image4.classList.remove('rotated')
    image5.classList.remove('rotated')

})
title2.addEventListener('click', () => {
    text1.classList.remove('enable')
    // text2.classList.remove('enable')
    text3.classList.remove('enable')
    text4.classList.remove('enable')
    text5.classList.remove('enable')

    title1.classList.remove('bold_text')
    title4.classList.remove('bold_text')
    title3.classList.remove('bold_text')
    title5.classList.remove('bold_text')

    text2.classList.toggle('enable')
    title2.classList.toggle('bold_text')
    image2.classList.toggle('rotated')
    image1.classList.remove('rotated')
    image3.classList.remove('rotated')
    image4.classList.remove('rotated')
    image5.classList.remove('rotated')
})
title3.addEventListener('click', () => {
    text1.classList.remove('enable')
    text2.classList.remove('enable')
    // text3.classList.remove('enable')
    text4.classList.remove('enable')
    text5.classList.remove('enable')

    title1.classList.remove('bold_text')
    title2.classList.remove('bold_text')
    title4.classList.remove('bold_text')
    title5.classList.remove('bold_text')

    text3.classList.toggle('enable')
    title3.classList.toggle('bold_text')
    image3.classList.toggle('rotated')
    image1.classList.remove('rotated')
    image2.classList.remove('rotated')
    image4.classList.remove('rotated')
    image5.classList.remove('rotated')
})
title4.addEventListener('click', () => {
    text1.classList.remove('enable')
    text2.classList.remove('enable')
    text3.classList.remove('enable')
    // text4.classList.remove('enable')
    text5.classList.remove('enable')

    title1.classList.remove('bold_text')
    title2.classList.remove('bold_text')
    title3.classList.remove('bold_text')
    title5.classList.remove('bold_text')



    text4.classList.toggle('enable')
    title4.classList.toggle('bold_text')
    image4.classList.toggle('rotated')
    image1.classList.remove('rotated')
    image3.classList.remove('rotated')
    image2.classList.remove('rotated')
    image5.classList.remove('rotated')
})

title5.addEventListener('click', () => {
    text1.classList.remove('enable')
    text2.classList.remove('enable')
    text3.classList.remove('enable')
    text4.classList.remove('enable')
    // text5.classList.remove('enable')

    title1.classList.remove('bold_text')
    title2.classList.remove('bold_text')
    title3.classList.remove('bold_text')
    title4.classList.remove('bold_text')

    text5.classList.toggle('enable')
    title5.classList.toggle('bold_text')
    image5.classList.toggle('rotated')
    image1.classList.remove('rotated')
    image3.classList.remove('rotated')
    image4.classList.remove('rotated')
    image2.classList.remove('rotated')
})