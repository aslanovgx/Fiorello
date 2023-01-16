const Form1 = document.getElementById("form_btn");
const Btns = Form1.getElementsByClassName("btn_desc");
for (var i = 0; i < Btns.length; i++) {
  Btns[i].addEventListener("click", function() {
    console.log('sal');
  var current = document.getElementsByClassName("but_active");
  current[0].className = current[0].className.replace(" but_active", "");
  this.className += " but_active";
  });}

const Btn1 = document.querySelector('.bt1')
const Btn2 = document.querySelector('.bt2')
const Btn3 = document.querySelector('.bt3')

const Row_1 = document.querySelector('.row_desc_1')
const Row_2 = document.querySelector('.row_desc_2')
const Row_3 = document.querySelector('.row_desc_3')

if(Btn1) {
    Btn1.addEventListener('click',()=> {
        Row_1.style.display = "block"
        Row_2.style.display = "none"
        Row_3.style.display = "none"
    })
}
if(Btn2) {
    Btn2.addEventListener('click',()=> {
        Row_1.style.display = "none"
        Row_2.style.display = "block"
        Row_3.style.display = "none"
    })
}
if(Btn3) {
    Btn3.addEventListener('click',()=> {
        Row_1.style.display = "none"
        Row_2.style.display = "none"
        Row_3.style.display = "block"
    })
}


// -------------------------------------------

const Mobile_Nav = document.querySelector('.mobile_box')
const X_Btn = document.querySelector('.fa-xmark')
const Bar_nav = document.querySelector('.fa-bars')

if(Bar_nav){
    Bar_nav.addEventListener('click', ()=> {
    Mobile_Nav.style.transform = "translateX(0px)"
    // console.log('sa');
    })
}
if(X_Btn){
    X_Btn.addEventListener('click', ()=> {
    Mobile_Nav.style.transform = "translateX(100%)"
    // console.log('sa');
    })
}



// ------------------

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