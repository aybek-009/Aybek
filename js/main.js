const btn = document.querySelector('#btn-1');

btn.addEventListener('click',()=>{
    alert("Your message has been sent")
});
const menuBtn = document.querySelector('#pages-btn');
const navigation = document.querySelector('.navigation');
const close =document.querySelector('#close');
const navItem=document.querySelector('#active');


menuBtn.addEventListener('click', ()=> {
    navigation.style.display='block'
})
close.addEventListener('click',() =>{
    navigation.style.display='none';
})




