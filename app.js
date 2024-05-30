const boxes = document.querySelectorAll('.divs');
window.addEventListener("scroll",myFunction);
function myFunction(){
    const IHeight = window.innerHeight /10 *7;
    boxes.forEach(myFunction1);
    function myFunction1(box){
        const wheight = box.getBoundingClientRect().top;
        if(wheight < IHeight){
            box.classList.add('box');
        }
        

        
    }
    const IHeight1 = window.innerHeight /3 *2;
    const wheight1 = document.querySelector('.divclass3').getBoundingClientRect().top;
    if(IHeight > wheight1){
        document.querySelector('.divclass3 > p').style.opacity = 1;
    }

}

const boxes1 = document.querySelectorAll('.divs1');
window.addEventListener("scroll",myFunction2);
function myFunction2(){
    const IHeight1 = window.innerHeight / 10 *8;
    boxes1.forEach((box)=>{
        const wheight2 = box.getBoundingClientRect().top;
        if(wheight2 < IHeight1){
            box.classList.add('box');
        }
       
    })
}