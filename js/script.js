const toggle_btn = document.querySelector('.toggle_btn');
const nav_right = document.querySelector('.nav_right');

const all_line = document.querySelectorAll('.line');

toggle_btn.onclick = () => {

    all_line.forEach(allLines => {
        allLines.classList.toggle('active');

        if(allLines.classList.contains('active')) {
            nav_right.classList.add('active');
        }else {
            nav_right.classList.remove('active');
        }
    })

}

// Navbar Fixed On Scroll Down

const navbar = document.querySelector('.navbar');

window.onscroll = () => {

    all_line.forEach(allLines => {
        allLines.classList.remove('active');

        if(allLines.classList.contains('active')) {
            nav_right.classList.add('active');
        }else {
            nav_right.classList.remove('active');
        }
    })

    if(scrollY > 56) {
        navbar.classList.add('active');
    }else {
        navbar.classList.remove('active');
    }

}