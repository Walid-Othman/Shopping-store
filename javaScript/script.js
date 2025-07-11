function navBar() {
    let bar = document.getElementById('bar')
    let navbar = document.getElementById('navbar')
    let position = 'open'
    if (bar)
        if (navbar)
            bar.addEventListener('click', () => {
                if (localStorage.getItem('position') === 'open') {
                    navbar.style.right = "0px"
                    console.log('Iam working')
                    // bar.style.marginLeft = '-380px'
                    position = 'close'
                } else {
                    navbar.style.right = "-100%"
                    console.log('Iam working')
                    // bar.style.marginLeft = '0px'
                    position = 'open'
                }
                localStorage.setItem('position', position)
            })
    window.addEventListener('click', e => {
        e.stopPropagation()
        if (e.target !== bar && e.target !== navbar) {
            navbar.style.right = "-100%"
            position = 'open'
            localStorage.setItem('position', position)
        }
    })
}

// function for replace images 
function replaceImages() {

    let mainImg = document.getElementById('mainImg')
    let smallImg = document.getElementsByClassName('small-img-col')
    if (smallImg)
        if (mainImg)

            if (smallImg.length > 0) {

                for (let i = 0; i < smallImg.length; i++)
                    smallImg[i].addEventListener('click', () => {
                        mainImg.src = smallImg[i].src
                    })
            }

}

//function to show product

function showProduct() {
    let cardJs = document.getElementsByClassName('card-js')
    if (cardJs.length > 0) {
        for (let i = 0; i < cardJs.length; i++)
            cardJs[i].addEventListener('click', () => {
                window.location.href = 'singlproduct.html'
            })
    }


}


//singUp function

function singUp() {
    let form = document.getElementById('form')
    if (form)
        form.addEventListener('submit', e => {
            e.preventDefault()
            let firstName = document.getElementById('singup-firstName').value.trim()
            let lastName = document.getElementById('singup-lastName').value.trim()
            let email = document.getElementById('singup-email').value.trim()
            let password = document.getElementById('singup-password').value.trim()
            let users = JSON.parse(localStorage.getItem('users')) || []
            let user = users.find(u => u.email === email)
            if (user) {
                alert(`Sorry, ${firstName} this email is already registered. please choose another one`)
                return
            }
            let newUser = {
                firstName,
                lastName,
                email,
                password,
                role: 'user',
            }
            users.push(newUser)
            localStorage.setItem('users', JSON.stringify(users))
            alert(`Thanks, ${firstName} registration has been successful.you can log in now.`)
            window.location.href = 'index.html'
        })
}

// login function

function logIn() {
    let form = document.getElementById('login-form')
    if (form)
        form.addEventListener('submit', e => {
            e.preventDefault()
            let email = document.getElementById('email').value.trim()
            let password = document.getElementById('password').value.trim()
            let users = JSON.parse(localStorage.getItem('users')) || []
            let user = users.find(u => u.email === email && u.password === password)
            if (user) {
                window.location.href = 'home.html'
            }
            else {
                alert('there is an error in the emil or password')
            }
            localStorage.setItem('logInUsers', JSON.stringify(user))
        })

}


// welcome function 

function welcome() {
    let user = JSON.parse(localStorage.getItem('logInUsers'))
    let hello = document.getElementById('greets')
    if (user && hello) {
        hello.textContent = `WELCOME : ${user.firstName.toUpperCase()} 👋`
        localStorage.setItem('loginUsers', JSON.stringify(user))
    }

}

// function up 

function up() {
    let up = document.getElementById('Up')
    if (up)
        window.addEventListener('scroll', () => {

            if (window.scrollY < 400) {
                up.style.display = 'none'
            } else {
                up.style.display = 'block'
            }
        })
    up.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'

        })


    })


}

// dark mood function

// function darkMood() {
//     let body = document.body
//     let btnDark = document.getElementById('dark-mood')
//     if (btnDark)
//         btnDark.addEventListener('click', () => {
//             body.classList.toggle('dark')
//             if (body.classList.contains('dark')) {
//                 localStorage.setItem('mood', 'dark')
//                 btnDark.style.backgroundColor = 'gray'
//                 btnDark.textContent = '☀️'
//             } else {
//                 localStorage.setItem('mood', 'light')
//                 btnDark.style.backgroundColor = 'gray'
//                 btnDark.textContent = '🌙'
//             }

//         })
//     if (localStorage.getItem('mood') === 'dark') {
//         body.classList.add('dark')
//         body.style.color='#fff'
//         btnDark.style.backgroundColor = 'gray'
//         btnDark.textContent = '☀️'
//     } else {
//         body.classList.remove('dark')
//         btnDark.style.backgroundColor = 'gray'
//         btnDark.textContent = '🌙'
//     }
// }




// Show password function 
function showPassWord() {
    let showPassWord = document.getElementById('show-password')
    let password = document.getElementById('password')
    let mood = 'show'
    if (showPassWord && password) {
        showPassWord.addEventListener('click', () => {
            if (localStorage.getItem('mood') === 'show') {
                password.type = 'text'
                mood = 'hiden'
                showPassWord.textContent = '👁️'
            } else {
                password.type = 'password'
                mood = 'show'
                showPassWord.textContent = '👁‍🗨'
            }
            localStorage.setItem('mood', mood)
        })

    }
}

// show password function singUp

function showPassWordSingUp() {
    let showPassWord = document.getElementById('show-password')
    let password = document.getElementById('singup-password')
    let mood = 'show'
    if (showPassWord && password) {
        showPassWord.addEventListener('click', () => {
            if (localStorage.getItem('mood') === 'show') {
                password.type = 'text'
                showPassWord.textContent = '👁️'
                mood = 'hiden'
            } else {
                password.type = 'password'
                showPassWord.textContent = '👁‍🗨'
                mood = 'show'
            }
            localStorage.setItem('mood', mood)
        })
    }
}












// logout function 

function logOut() {
    let logOut = document.getElementById('logout')
    if (logOut)
        logOut.addEventListener('click', () => {
            localStorage.removeItem("logInUsers")
            alert('you are logged out')
            window.location.href = 'index.html'

        })

}

document.addEventListener('DOMContentLoaded', () => {
     navBar()
    showProduct()
    replaceImages()
    up()
    singUp()
    logIn()
    showPassWord()
    showPassWordSingUp()
    welcome()
    // darkMood()
    logOut()
})
