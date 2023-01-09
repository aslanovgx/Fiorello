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