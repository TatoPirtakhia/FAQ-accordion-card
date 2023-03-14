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


title1.addEventListener('click', () => {
    text1.classList.add('span_text')
    title1.classList.add('bold_text')
})
title2.addEventListener('click', () => {
    text2.classList.add('span_text')
    title2.classList.add('bold_text')
})
title3.addEventListener('click', () => {
    text3.classList.add('span_text')
    title3.classList.add('bold_text')
})
title4.addEventListener('click', () => {
    text4.classList.add('span_text')
    title4.classList.add('bold_text')
})

title5.addEventListener('click', () => {
    text5.classList.add('span_text')
    title5.classList.add('bold_text')
})