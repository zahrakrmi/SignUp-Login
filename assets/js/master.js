const box = document.querySelector('.box')
const signupBtn = document.querySelector('.signupBtn')
const LoginBtn = document.querySelector('.LoginBtn')
const userL = document.querySelector('#userL')
const span = document.querySelectorAll('.loginInp>span')
const i = document.querySelectorAll('.loginInp>i')
const passL = document.querySelector('#passL')
const lock = document.querySelector('.lock')
const btn = document.querySelectorAll('.btn')
const userS = document.querySelector('#userS')
const email = document.querySelector('#email')
const passS = document.querySelector('#passS')
const p = document.querySelector('.loginInp>p')



let temp = ''
let tempPass = ''
let tempUS = ''
let tempES = ''
let tempPS='' 
////log in/////
/////////username/////
userL.addEventListener('input', () => {
    temp = userL.value

    if (temp == '' ||
        temp == null ||
        temp.search(/<script/) >= 0
    ) {
        span[0].innerHTML = 'please fill out correctly!'
        i[0].style.top = '37%'
    } else {
        span[0].innerHTML = ''
    }
})
///////////////password///////
passL.addEventListener('input', () => {
    tempPass = passL.value

    if (tempPass == '' ||
        tempPass == null ||
        tempPass.search(/<script/) >= 0
    ) {
        span[1].innerHTML = 'please fill out correctly!'
        lock.style.top = '37%'
    } else {
        span[1].innerHTML = ''
    }
})

///click pass eye //
let flag = 1
lock.addEventListener('click', () => {
    if (flag % 2) {
        lock.children[0].style.opacity = '0'
        lock.children[1].style.opacity = '1'
        passL.setAttribute('type', 'password')
    } else {
        lock.children[0].style.opacity = '1'
        lock.children[1].style.opacity = '0'
        passL.setAttribute('type', 'text')
    } flag++
})

////click btn log in ////
btn[0].addEventListener('click', (e) => {
    temp = userL.value

    if (temp == '' ||
        temp == null ||
        temp.search(/<script/) >= 0
    ) {
        span[0].innerHTML = 'please fill out correctly!'
        i[0].style.top = '37%'
        e.preventDefault()

    } else {
        span[0].innerHTML = ''
    }


    tempPass = passL.value

    if (tempPass == '' ||
        tempPass == null ||
        tempPass.search(/<script/) >= 0
    ) {
        span[1].innerHTML = 'please fill out correctly!'
        lock.style.top = '37%'
        e.preventDefault()

    } else {
        span[1].innerHTML = ''
    }
})


///////////////////////////////


///////sign up //////
/////username input////
userS.addEventListener('input', () => {
    tempUS = userS.value

    if (tempUS == '' ||
        tempUS == null ||
        tempUS.search(/<script/) >= 0 ||
        tempUS.search(/^[a-z0-9_-]{3,15}$/) == -1
    ) {
        span[2].innerHTML = 'please fill out correctly!'
        i[1].style.top = '37%'
    } else {
        span[2].innerHTML = ''
    }
})
//////email input/////
email.addEventListener('input', () => {
    tempES = email.value

    if (tempES == '' ||
        tempES == null ||
        tempES.search(/<script/) >= 0 ||
        tempES.search(/@/)<=2||
        tempES.length<10 ||
        (tempES.search(/@/))+4 > tempES.search(/[.]/)
    ) {
        span[3].innerHTML = 'please fill out correctly!'
        i[2].style.top = '37%'
    } else {
        span[3].innerHTML = ''
    }
})
//////////////password input////////
passS.addEventListener('input', () => {
    tempPS = passS.value
    let flag =0
    if (tempPS == '' ||
        tempPS == null ||
        tempPS.search(/<script/) >= 0 ||
        tempPS.search(/[0-9]/)==-1 ||
        tempPS.search(/[a-z]/)==-1 ||
        tempPS.search(/[A-Z]/)==-1 ||
        tempPS.search(/[@#$%^&&**()]/) ==-1 ||
        tempPS.length < 8 
    ) {
        span[4].innerHTML = 'please fill out correctly!'
        i[3].style.top = '37%'
    } else {
        span[4].innerHTML = ''
    }


    tempPS.search(/[0-9]/)>=0 && flag++
    tempPS.search(/[a-z]/)>=0 && flag++
    tempPS.search(/[A-Z]/)>=0 && flag++
    tempPS.search(/[@#$%^&&**()]/) >= 0 && flag++
    tempPS.length>=8 && flag++

    switch(flag){
        case 0 :p.innerHTML=''; p.style.color= 'black' ; break;
        case 1 :p.innerHTML='very weak !' ; p.style.color= 'red' ; break;
        case 2 :p.innerHTML='weak !' ; p.style.color= 'orange' ; break;
        case 3 :p.innerHTML='normal !' ; p.style.color= 'rgb(239, 239, 104)' ; break;
        case 4 :p.innerHTML='good !' ; p.style.color= 'green' ; break;
        case 5 :p.innerHTML='strong !' ; p.style.color= 'blue' ; break;

    }
})
////////////click btn sign up ////////
btn[1].addEventListener('click',(e)=>{
    tempUS = userS.value

    if (tempUS == '' ||
        tempUS == null ||
        tempUS.search(/<script/) >= 0 ||
        tempUS.search(/^[a-z0-9_-]{3,15}$/) == -1
    ) {
        span[2].innerHTML = 'please fill out correctly!'
        i[1].style.top = '37%'
        e.preventDefault()
    } else {
        span[2].innerHTML = ''
    }



    tempES = email.value

    if (tempES == '' ||
        tempES == null ||
        tempES.search(/<script/) >= 0 ||
        tempES.search(/@/)<=2||
        tempES.length<10 ||
        (tempES.search(/@/))+4 > tempES.search(/[.]/)
    ) {
        span[3].innerHTML = 'please fill out correctly!'
        i[2].style.top = '37%'
        e.preventDefault()

    } else {
        span[3].innerHTML = ''
    }



    tempPS = passS.value
    let flag =0
    if (tempPS == '' ||
        tempPS == null ||
        tempPS.search(/<script/) >= 0 ||
        tempPS.search(/[0-9]/)==-1 ||
        tempPS.search(/[a-z]/)==-1 ||
        tempPS.search(/[A-Z]/)==-1 ||
        tempPS.search(/[@#$%^&&**()]/) ==-1 ||
        tempPS.length < 8 
    ) {
        span[4].innerHTML = 'please fill out correctly!'
        i[3].style.top = '37%'
        e.preventDefault()
        
    } else {
        span[4].innerHTML = ''
    }
})

/////////////////////////
signupBtn.addEventListener('click', () => {
    box.classList.add('active')
})

LoginBtn.addEventListener('click', () => {
    box.classList.remove('active')
})
