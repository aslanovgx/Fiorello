const Mobile_Nav = document.querySelector('.mobile_box')
const X_Btn = document.querySelector('.fa-xmark')
const Bar_nav = document.querySelector('.fa-bars')

if (Bar_nav) {
    Bar_nav.addEventListener('click', () => {
        Mobile_Nav.style.transform = "translateX(0px)"
        console.log('sa');
    })
}
if (X_Btn) {
    X_Btn.addEventListener('click', () => {
        Mobile_Nav.style.transform = "translateX(100%)"
        // console.log('sa');
    })
}

// --------------------------------
const Nav_Home_Details3 = document.querySelector('.nav_home_details3');
const SearchBtn = document.querySelector('.glasses');

if (SearchBtn) {
    SearchBtn.addEventListener('click', (e) => {
        e.stopPropagation()
        if (Nav_Home_Details3.classList.contains('nav_remove')) {
            Nav_Home_Details3.classList.remove('nav_remove')
            Nav_Home_Details3.style.transform = 'translateY(0px)'
            Nav_Home_Details3.style.height = 'auto'
        }
        else {
            Nav_Home_Details3.classList.add('nav_remove')
            Nav_Home_Details3.style.transform = 'translateY(-46px)'
            Nav_Home_Details3.style.height = '0'
        }
    })
}