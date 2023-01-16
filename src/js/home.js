const Images = document.querySelector('.back_image')
// console.log(Images.style.backgroundImage);
var time = 3000

Images[0] = './../src/images/h3-slider-background.jpg'
Images[1] = './../src/images/h3-slider-background-2.jpg'
Images[2] = './../src/images/h3-slider-background-3.jpg'

for (let i = 0; i < 3; i++) {
    const element = Images[i];
    function ChangeImg() {
        Images.src = Images[i]
        if (i < 2) {
            Images.style.transform = 'scale(1.08)'
            i++;
        }
        else {
            Images.style.transform = 'scale(1.02)'
            i = 0;
        }


        setTimeout('ChangeImg()', time);
    }
}
window.onload = ChangeImg;

// --------------------------------------------
// --------------------------------------------

const İframe_Btn = document.querySelector('#iframe_btn')
const İframe_Remove_Btn = document.querySelector('.iframe_remove')
const Iframe_Box = document.querySelector('#iframe_f')
const Body = document.querySelector('#main')


if (İframe_Btn) {
    İframe_Btn.addEventListener('click', (e) => {
        e.preventDefault();
        console.log('salam');
        Iframe_Box.style.display = "block"
        Body.style.opacity = "0.5"
        Iframe_Box.style.opacity = "1"
        İframe_Remove_Btn.style.display = "block"


    })
}
if (İframe_Remove_Btn) {
    İframe_Remove_Btn.addEventListener('click', (e) => {
        e.preventDefault();
        console.log('salam');
        Iframe_Box.style.display = "none"
        Body.style.opacity = "1"
        Iframe_Box.style.opacity = "0"

        İframe_Remove_Btn.style.display = "none"

    })
}






var swiper = new Swiper(".swiper-navigate", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// --------------------------------------------------------

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

// ------------------------------------
// const Home_Id = document.getElementById('pages_li')
// if (Home_Id) {
//     Home_Id.addEventListener('click', ()=> {
//         console.log('sdsd');
//     })
// }


// ------------------------------------
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


// -------------------------------------------

const data = [
    {
        img: "https://fiorello.qodeinteractive.com/wp-content/uploads/2018/04/shop-14-img.jpg",
        desc: "Majesty Palm",
        money: 259,
        isotope_class_names: 'cactuses greens popular',
    },
    {
        img: "https://fiorello.qodeinteractive.com/wp-content/uploads/2018/04/shop-13-img.jpg",
        desc: "Foxglove Flower",
        money: 259,
        isotope_class_names: 'exotic winter',
    },
    {
        img: "https://fiorello.qodeinteractive.com/wp-content/uploads/2018/05/shop-10-img.jpg",
        desc: "Sweet Alyssum",
        money: 259,
        isotope_class_names: 'cactuses greens various',
    },
    {
        img: "https://fiorello.qodeinteractive.com/wp-content/uploads/2018/04/shop-11-img.jpg",
        desc: "Spring Snowflake",
        money: 170,
        isotope_class_names: 'popular winter',
    },
    {
        img: "https://fiorello.qodeinteractive.com/wp-content/uploads/2018/04/shop-12-img.jpg",
        desc: "Scarlet Sag",
        money: 259,
        isotope_class_names: 'exotic winter',
    },
    {
        img: "https://fiorello.qodeinteractive.com/wp-content/uploads/2018/04/shop-9-img.jpg",
        desc: "Rock Soapwort",
        money: 259,
        isotope_class_names: 'cactuses greens',
    },
    {
        img: "https://fiorello.qodeinteractive.com/wp-content/uploads/2018/04/shop-8-img.jpg",
        desc: "Summer Savory",
        money: 259,
        isotope_class_names: 'cactuses greens popular various',
    },
    {
        img: "https://fiorello.qodeinteractive.com/wp-content/uploads/2018/04/shop-7-img.jpg",
        desc: "Wild Roses",
        money: 259,
        isotope_class_names: 'exotic popular various',
    }


]

var i = 0
data.map((el) => {
    i = i + 1
    // console.log(i);
    const Data_Row = document.querySelector('.data_row')
    const data = `
<div class="col-lg-3 col-md-6 col-sm-12 mb-5 ${el.isotope_class_names}">
<div class="isotop_card">
    <div class="img">
        <img src="${el.img}"
            alt="">
    </div>
    <div class="isotop_details">
        <a href="#">${el.desc}</a>

        <span>$<span>${el.money}</span></span>
        <div class="span_hover">
            <span id="add1_btn">Add to cart</span>
        </div>

    </div>
</div>
</div>
`
    Data_Row.innerHTML += data;
    // console.log(data[0]);
    // console.log(el.money);
    // console.log(data);
    // ADD_data_Row.innerHTML += ADD_Data
    // console.log(ADD_Data);
    // console.log(data);


    // console.log(Add_Btn.id.replace = 'addddd');



})


const ADD_data_Row = document.querySelector('.all_of_that')
// const Total_data_Row = document.querySelector('.tot_all')
const Add_Btn = document.querySelectorAll('#add1_btn')

const Nav_Home_Details4 = document.querySelector('.nav_home_details4')
const No_Product = document.querySelector('#no_prod')


// --------------------------

// init Isotope
var $grid = $('#product-list').isotope({
    // options
});
// filter items on button click
$('.filter-button-group').on('click', 'li', function () {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
});


// --------------------------


let f = 0
for (let k = 0; k < Add_Btn.length; k++) {
    const element = Add_Btn[k];
    // console.log(element);
    // console.log(el.img);
    // console.log(el.img);
    element.addEventListener('click', () => {
        // console.log(element.getAttribute('id'));
        // console.log('sa');

        // This is img src of isotope card
        const img_src_isotope_card = element.parentElement.parentElement.parentElement.children[0].firstElementChild.src
        // console.log(img_src_isotope_card);


        // This is desc of isotope card
        const desc_of_isotope_card = element.parentElement.parentElement.firstElementChild.innerHTML
        // console.log(desc_of_isotope_card);


        // This is money of isotope card
        const money_of_isotope_card = element.parentElement.parentElement.children[1].children[0].innerHTML;
        // console.log(money_of_isotope_card);

        // This is count of isotope card
        // const count_of_isotope_card = element.parentElement.parentElement.children[1].innerHTML
        // console.log(count_of_isotope_card);





        //     const Total_data = `
        //     <div class="total_part">
        //     <span>TOTAL:</span>
        //     <span>$<span id="total_price">0</span></span>
        // </div>
        // <div class="button_part">
        //     <button>VIEW CART</button>
        //     <button>CHECKOUT</button>
        // </div>
        //     `

        //     Total_data_Row.innerHTML = Total_data


        const ADD_Data = `
        <div class="card_of_add_to">
        <div class="img_and_desc">
            <img src="${img_src_isotope_card}"
                alt="">
        </div>
        <div class="desc_part">
            <a href="#">${desc_of_isotope_card}</a>
            <div class="span_descs">
                <div class="span_lefts">
                    <span id="increase_count">1</span> <span>X</span> <span id="money_of_cart">${money_of_isotope_card}</span>
                </div>

                    <i class="fa-solid fa-xmark decline_x"></i>

            </div>
        </div>
    </div>
`

        // console.log(Number(Count_of_cart.innerHTML));

        ADD_data_Row.innerHTML += ADD_Data






        // ADD_data_Row.style.margin = '56px 0 0 0'
        No_Product.style.display = 'none'

        const Total_price = document.getElementById('total_price')
        Total_price.innerHTML = Number(Total_price.innerHTML) + Number(money_of_isotope_card);

        const Length_of_cards = document.getElementById('add_to_cart_index')
        Length_of_cards.innerHTML = Number(Length_of_cards.innerHTML) + Number(1);


        // var arr = [];
        // arr += arr.push(ADD_data_Row.children[0].children[0].children[0].src);
        // console.log(arr);


        // tp = tp + 20
        // console.log(tp);
        // var elementv = parseInt(Total_price[h].innerHTML);
        // elementv = elementv + 20
        // console.log(elementv);


        const Remove_cart = document.querySelectorAll('.decline_x')
        // console.log(Remove_cart);
        for (let j = 0; j < Remove_cart.length; j++) {
            const element2 = Remove_cart[j];
            element2.addEventListener('click', () => {
                // ADD_Data.style.display = 'none'
                const for_removing = element2.parentElement.parentElement.parentElement
                // console.log(for_removing);
                money_near_of_removing_btn = element2.parentElement.children[0].children[2].innerHTML
                for_removing.remove()

                Total_price.innerHTML = Number(Total_price.innerHTML) - Number(money_near_of_removing_btn);
                Length_of_cards.innerHTML = Number(Length_of_cards.innerHTML) - Number(1);

                if (Length_of_cards.innerHTML == '0') {
                    No_Product.style.display = 'block'
                    ADD_data_Row.style.margin = '0 0 0 0'

                }
            })
        }













        // console.log(Number(Count_of_cart.innerHTML));
        // console.log(img_src_isotope_card.size);

        // console.log(Count_of_cart.innerText)
        // if(img_src_isotope_card > 1) {
        //     ADD_data_Row.innerHTML == ADD_Data
        // }
        // f = f + 1
        // console.log(f);
        // Count_of_cart.innerText == f

    })
}






