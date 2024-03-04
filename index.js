let list= document.querySelector('.slider .list')
let items= document.querySelectorAll('.slider .list .item')
let dots= document.querySelectorAll('.slider .dots li')
let prev=document.getElementById('prev')
let next=document.getElementById('next')
let reasons=document.querySelectorAll('.confession li')
let ans1=document.querySelector('.ans1')
let ans2=document.querySelector('.ans2')

let active=0;
let lengthItems=items.length-1;

for (var i = 0; i < reasons.length; i++) {
    (function(index) {
        reasons[index].onmouseover = function() {
            reasons[index].classList.add('onmouse');
        };
    })(i);
}

for (var i = 0; i < reasons.length; i++) {
    (function(index) {
        reasons[index].onmouseout = function() {
            reasons[index].classList.remove('onmouse');
        };
    })(i);
}

ans1.onclick=function(){
    ans1.style.transition='1s';
    ans1.textContent="YES💘";
}

ans2.onmouseover = function() {
    let ranLeft = Math.random() * (window.innerWidth - ans2.clientWidth);
    let ranTop = Math.random() * (window.innerHeight - ans2.clientHeight);

    ans2.style.position='relative';
    ans2.style.left = ranLeft + 'px';
    ans2.style.top = ranTop + 'px';
};

next.onclick = function(){
    if(active+1>lengthItems){
        active=0;
    }else{
        active++;
    };
    reloadSlider();
}

prev.onclick = function(){
    if(active-1<0){
        active=lengthItems;
    }else{
        active--;
    };
    reloadSlider();
}

dots.forEach((li,key)=>{
    li.addEventListener('click',function(){
        active=key;
        reloadSlider();
    })
})

let refreshSlider = setInterval(()=>{next.click()},3000);

function reloadSlider(){
    let checkLeft=items[active].offsetLeft;
    list.style.left=-checkLeft+'px';
    let lastActiveDot=document.querySelector('.slider .dots li.active');
    lastActiveDot.classList.remove('active');
    dots[active].classList.add('active');
    clearInterval(refreshSlider);
    refreshSlider = setInterval(()=>{next.click()},3000);
}

