let container = document.querySelector('.container')
let btns = document.querySelectorAll('.btn')

let images = ['1','2','3','4','5']
let index = 0
btns.forEach((button)=>{
    button.addEventListener('click',()=>{
        if(button.classList.contains('btn-left'))
        {
            index--;
            if(index<0)
                index = images.length-1;
            container.style.background = `url("images/${images[index]}.webp") center/cover fixed no-repeat`
        }
        else
        {
            index++;
            if(index==images.length)
                index = 0
            container.style.background = `url("images/${images[index]}.webp") center/cover fixed no-repeat`
        }
    })
})