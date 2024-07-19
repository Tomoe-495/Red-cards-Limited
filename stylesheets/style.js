
//      navbar collapse and expand start------------
let ham = document.getElementsByClassName('ham')[0];
let nav = document.getElementsByClassName('navbar')[0];
let shade = document.getElementsByClassName('back-shade')[0];
let menu = document.getElementsByClassName('menu')[0];
let cross = false;

[ham, shade].forEach((e) =>{
    e.onclick = ()=>{
        cross = ! cross;

        if(cross){
           ham.classList.add('active');
           menu.classList.add('active');
           nav.classList.add('active');
           shade.style.width = "100vw";
           shade.style.opacity = "1";
        }else{
           ham.classList.remove('active');
           menu.classList.remove('active');
           nav.classList.remove('active');
           shade.style.width = "1px";
           shade.style.opacity = "0";
        }
       
    }
})
//      navbar  collapse and expand end----------------

//        page changer start
let sects = document.getElementsByClassName('firstsects');

function switchsect(num, num2=5){
    for(let i of sects){
        i.classList.remove('active');
    }
    sects[num].classList.add('active');
    
    if(num != 5){
        window.scrollTo(0, 0);
    }


    if(num2 == 5){
        cross = ! cross;


    if(cross){
       ham.classList.add('active');
       menu.classList.add('active');
       nav.classList.add('active');
       shade.style.width = "100vw";
       shade.style.opacity = "1";
    }else{
       ham.classList.remove('active');
       menu.classList.remove('active');
       nav.classList.remove('active');
       shade.style.width = "1px";
       shade.style.opacity = "0";
    }}
}

//         page changer end



//      color theme switcher    -----------------------
let ball = document.getElementsByClassName('themechange');
let ballswitch = false;
let ballTheme = document.getElementsByClassName('theme');
let brand = document.getElementsByClassName('brand');
let icons = document.getElementsByClassName('icons');

for(let e of ball){
    e.onclick = ()=>{
        ballswitch = ! ballswitch;
        if(ballswitch){
            e.classList.add('active');
            for(let i of ballTheme){
            i.style.color = "white";
            i.name = "moon";}

            //      theme change to dark
            document.documentElement.style.setProperty('--themelight', 'rgb(60, 60, 60)');
            document.documentElement.style.setProperty('--theme', '#131313');
            document.documentElement.style.setProperty('--themedark', '#fff');

            //      theme change of fonts to dark
            document.documentElement.style.setProperty('--fontcolor', '#fff');
            document.documentElement.style.setProperty('--fontcolorl', 'rgb(200, 200, 200');
            document.documentElement.style.setProperty('--fontcolord', 'rgb(230, 230, 230)');
            document.documentElement.style.setProperty('--fontcolorlight', 'rgb(50, 50, 50)');

            for(let t of brand){
                t.style.border = "1px solid rgba(255, 255, 255, .1)";
            }
     
        }else{
            e.classList.remove('active');
            for(let i of ballTheme){
            i.style.color = "#131313";
            i.name = "sunny";}

            //        theme change to light
            document.documentElement.style.setProperty('--themelight', 'rgb(240, 240, 240)');
            document.documentElement.style.setProperty('--theme', 'rgb(255, 255, 255)');
            document.documentElement.style.setProperty('--themedark', '#131313');

            //      theme change of fonts to light
            document.documentElement.style.setProperty('--fontcolor', 'rgb(50, 50, 50)');
            document.documentElement.style.setProperty('--fontcolorl', 'rgb(70, 70, 70)');
            document.documentElement.style.setProperty('--fontcolord', 'rgb(30, 30, 30)');
            document.documentElement.style.setProperty('--fontcolorlight', 'rgb(255, 255, 255)');

            for(let t of brand){
                t.style.border = "1px solid rgba(0, 0, 0, .1)";
            }
        }
    }
}
//      color theme switcher end    ---------------------

//      testimonials section start

$('.tes-container').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  dots: true,
  autoplay: true
});

//      testimonials section end

//      sorting navigation bar

let subSort = document.getElementsByClassName('sub-sort');
let mainsortbtn = document.getElementsByClassName('sort-btn-main');
let sortbtns = document.getElementsByClassName('sort-btns');

//      arrays of cards
let cards = document.getElementsByClassName('cards'); // all cards
//      categories
let bday = document.getElementsByClassName('bday');
let anniversary = document.getElementsByClassName('anniversary');
let business = document.getElementsByClassName('business');
let eid = document.getElementsByClassName('eid');
let wedding = document.getElementsByClassName('wedding');
let invitation = document.getElementsByClassName('invitation');
//      brands
let feelings = document.getElementsByClassName('feelings');
let honest = document.getElementsByClassName('honest');
let infinite = document.getElementsByClassName('infinite');
let kasina = document.getElementsByClassName('kasina');
let melodie = document.getElementsByClassName('melodie');
let plus5 = document.getElementsByClassName('plus5');
let shifted = document.getElementsByClassName('shifted');

function sortswitch(num){
    if(num == 0){
        mainsortbtn[1].classList.remove('active');
        mainsortbtn[0].classList.add('active');
        subSort[0].style.display = "block";
        subSort[1].style.display = "none";
    }else if(num == 1){
        mainsortbtn[0].classList.remove('active');
        mainsortbtn[1].classList.add('active');
        subSort[1].style.display = "block";
        subSort[0].style.display = "none";
    }
}

function cardappear(card, a="none"){
    for(let e of card){
        e.style.display = "none";
    }
    if(a != "none"){
        for(let i of a){
            i.style.display = "flex";
        };
    };
};

for(let i of sortbtns){
    i.onclick = ()=>{
        for(let e of sortbtns){
            e.classList.remove('active');
        }
        t = i.innerHTML;
        if(t == "All"){
            i.classList.add('active')
            for(let i of cards){
                i.style.display = "flex";
            }
        }
        else if(t == "feeling"){
            i.classList.add('active')
            cardappear(cards, feelings)
        }
        else if(t == "Honest Group"){
            i.classList.add('active');
            cardappear(cards, honest);
        }
        else if(t == "Infinite Creation"){
            i.classList.add('active')
            cardappear(cards, infinite);
        }
        else if(t == "Kasina Miller"){
            i.classList.add('active');
            cardappear(cards, kasina);
        }
        else if(t == "Melodie"){
            i.classList.add('active');
            cardappear(cards, melodie);
        }
        else if(t == "Plus5"){
            i.classList.add('active');
            cardappear(cards, plus5);
        }
        else if(t == "Shifted"){
            i.classList.add('active');
            cardappear(cards, shifted);
        }
        else if(t == "Birthday"){
            i.classList.add('active');
            cardappear(cards, bday);
        }
        else if(t == "Wedding"){
            i.classList.add('active');
            cardappear(cards, wedding);
        }
        else if(t == "Invitation"){
            i.classList.add('active');
            cardappear(cards, invitation);
        }
        else if(t == "Business Cards"){
            i.classList.add('active');
            cardappear(cards, business);
        }
        else if(t == "Anniversary"){
            i.classList.add('active');
            cardappear(cards, anniversary);
        }
        else if(t == "Eid"){
            i.classList.add('active');
            cardappear(cards, eid);
        }
    }
}
//      sorting navigation bar end

//      scroll up btn pop up
let scrollbtn = document.getElementsByClassName('scroll-btn')[0];
scrollbtn.onclick = ()=>{
    window.scrollTo(0, 0);
}

window.addEventListener("scroll", () => {
    const scrolled = window.scrollY;

    if(scrolled < 200){
        scrollbtn.classList.remove('active');
    }else{
        scrollbtn.classList.add('active');
    }
}
)
//      scroll up btn pop up end

//      contact form validation
let forms = document.getElementsByClassName('form-tab');
let formbtn = document.getElementsByClassName('form-btn')[0];
let names = document.getElementsByClassName('name');
let enail = document.getElementsByClassName('email')[0];
let subject = document.getElementsByClassName('subject')[0];
let text = document.getElementsByClassName('text')[0];




//      cards appearing

let cards_data = [
    {
        src: "images/cards/birthday/1.webp",
        head: "Birthday card - for a friend",
        price: "$5.99",
        classes: ["bday", "honest"]
    },
    {
        src: "images/cards/birthday/2.webp",
        head: "Birthday invitation card",
        price: "$5.99",
        classes: ["bday", "kasina"]
    },
    {
        src: "images/cards/birthday/3.webp",
        head: "Simple Birthday Card",
        price: "$3.99",
        classes: ["bday", "kasina"]
    },
    {
        src: "images/cards/birthday/4.webp",
        head: "Banquet Birthday Card",
        price: "$7.99",
        classes: ["bday", "honest"]
    },
    {
        src: "images/cards/birthday/5.webp",
        head: "Simple Birthday Card",
        price: "$2.99",
        classes: ["bday", "melodie"]
    },
    {
        src: "images/cards/birthday/6.webp",
        head: "Birthday Present Card",
        price: "$6.59",
        classes: ["bday", "plus5"]
    },
    {
        src: "images/cards/birthday/7.webp",
        head: "Birthday Present Card",
        price: "$6.99",
        classes: ["bday", "kasina"]
    },
    {
        src: "images/cards/birthday/8.webp",
        head: "Butterfly HandCraft Birthday Card",
        price: "$8.99",
        classes: ["bday", "infinite"]
    },
    {
        src: "images/cards/birthday/9.webp",
        head: "Casual Art Birthday Card",
        price: "$6.49",
        classes: ["bday", "infinite"]
    },
    {
        src: "images/cards/birthday/10.webp",
        head: "Flower HandCraft Birthday Card",
        price: "$7.99",
        classes: ["bday", "kasina"]
    },
        {
        src: "images/cards/birthday/11.webp",
        head: "Birthday Present Card",
        price: "$5.99",
        classes: ["bday", "feelings"]
    },
    {
        src: "images/cards/anniversary/1.webp",
        head: "Anniversary Present Card",
        price: "$5.99",
        classes: ["anniversary", "melodie"]
    },
    {
        src: "images/cards/anniversary/2.webp",
        head: "Anniversary Present Card",
        price: "$3.99",
        classes: ["anniversary", "melodie"]
    },
    {
        src: "images/cards/anniversary/3.webp",
        head: "Anniversary Present Card",
        price: "$4.99",
        classes: ["anniversary", "kasina"]
    },
    {
        src: "images/cards/anniversary/4.webp",
        head: "Anniversary Present Card",
        price: "$8.00",
        classes: ["anniversary", "infinite"]
    },
    {
        src: "images/cards/anniversary/5.webp",
        head: "Anniversary Present Card",
        price: "$5.00",
        classes: ["anniversary", "honest"]
    },
    {
        src: "images/cards/wedding/1.webp",
        head: "Wedding Invitation Card",
        price: "$4.99",
        classes: ["wedding", "kasina"]
    },
    {
        src: "images/cards/wedding/2.webp",
        head: "Flower Style Wedding Invitation Card",
        price: "$5.99",
        classes: ["wedding", "feelings"]
    },
    {
        src: "images/cards/wedding/3.webp",
        head: "Flower Frame Wedding Invitation Card",
        price: "$6.00",
        classes: ["wedding", "honest"]
    },
    {
        src: "images/cards/wedding/4.webp",
        head: "Green style Wedding Invitation Card",
        price: "$3.99",
        classes: ["wedding", "shifted"]
    },
    {
        src: "images/cards/wedding/5.webp",
        head: "Avator Wedding Invitation Card",
        price: "$5.99",
        classes: ["wedding", "honest"]
    },
    {
        src: "images/cards/wedding/6.webp",
        head: "Creative Design Wedding Invitation Card",
        price: "$7.99",
        classes: ["wedding", "feelings"]
    },
    {
        src: "images/cards/wedding/7.webp",
        head: "Vintage Style Wedding Invitation Card",
        price: "$7.00",
        classes: ["wedding", "kasina"]
    },
    {
        src: "images/cards/wedding/8.webp",
        head: "Vintage Style Wedding Invitation Card",
        price: "$5.00",
        classes: ["wedding", "infinite"]
    },
    {
        src: "images/cards/wedding/9.webp",
        head: "Flower Style Wedding Invitation Card",
        price: "$5.99",
        classes: ["wedding", "honest"]
    },
    {
        src: "images/cards/wedding/10.webp",
        head: "Transparent Wedding Invitation Card",
        price: "$15.00",
        classes: ["wedding", "kasina"]
    },
    {
        src: "images/cards/invitation/1.webp",
        head: "Event Invitation Card",
        price: "$4.99",
        classes: ["invitation", "melodie"]
    },
    {
        src: "images/cards/invitation/2.webp",
        head: "Metting Invitation Card",
        price: "$5.99",
        classes: ["invitation", "shifted"]
    },
    {
        src: "images/cards/invitation/3.webp",
        head: "Christmas Party Invitation Card",
        price: "$6.99",
        classes: ["invitation", "feelings"]
    },
    {
        src: "images/cards/invitation/4.webp",
        head: "Company Ball Invitation Card",
        price: "$4.99",
        classes: ["invitation", "kasina"]
    },
    {
        src: "images/cards/invitation/5.webp",
        head: "Wine Tasting Invitation Card",
        price: "$6.99",
        classes: ["invitation", "infinite"]
    },
    {
        src: "images/cards/invitation/6.webp",
        head: "Retro Sound Invitation Card",
        price: "$5.99",
        classes: ["invitation", "plus5"]
    },
    {
        src: "images/cards/invitation/7.webp",
        head: "Conference Invitation Card",
        price: "$2.99",
        classes: ["invitation", "shifted"]
    },
    {
        src: "images/cards/invitation/8.webp",
        head: "Graduation Party Invitation Card",
        price: "$5.99",
        classes: ["invitation", "melodie"]
    },
    {
        src: "images/cards/invitation/9.webp",
        head: "Star View Invitation Card",
        price: "$5.00",
        classes: ["invitation", "feelings"]
    },
    {
        src: "images/cards/invitation/10.webp",
        head: "Certain Event Invitation Card",
        price: "$4.99",
        classes: ["invitation", "shifted"]
    },
    {
        src: "images/cards/business cards/1.webp",
        head: "Business Card",
        price: "$5.99",
        classes: ["business", "shifted"]
    },
    {
        src: "images/cards/business cards/2.webp",
        head: "Business Card",
        price: "$5.99",
        classes: ["business", "shifted"]
    },
    {
        src: "images/cards/business cards/3.webp",
        head: "Business Card",
        price: "$5.99",
        classes: ["business", "shifted"]
    },
    {
        src: "images/cards/business cards/4.webp",
        head: "Business Card",
        price: "$5.99",
        classes: ["business", "shifted"]
    },
    {
        src: "images/cards/business cards/5.webp",
        head: "Business Card",
        price: "$5.99",
        classes: ["business", "shifted"]
    },
    {
        src: "images/cards/eid/1.webp",
        head: "Eid card",
        price: "$4.99",
        classes: ["eid", "plus5"]
    },
    {
        src: "images/cards/eid/2.webp",
        head: "Eid card",
        price: "$5.99",
        classes: ["eid", "infinite"]
    },
    {
        src: "images/cards/eid/3.webp",
        head: "Eid card",
        price: "$4.00",
        classes: ["eid", "plus5"]
    },
    {
        src: "images/cards/eid/4.webp",
        head: "Eid card",
        price: "$5.00",
        classes: ["eid", "kasina"]
    },
    {
        src: "images/cards/eid/5.webp",
        head: "Eid card",
        price: "$6.00",
        classes: ["eid", "feelings"]
    },
    {
        src: "images/cards/eid/6.webp",
        head: "Eid card",
        price: "$8.99",
        classes: ["eid", "melodie"]
    },
    {
        src: "images/cards/eid/7.webp",
        head: "Eid card",
        price: "$5.99",
        classes: ["eid", "plus5"]
    },
    {
        src: "images/cards/eid/8.webp",
        head: "Eid card",
        price: "$3.99",
        classes: ["eid", "plus5"]
    },
    {
        src: "images/cards/eid/9.webp",
        head: "Eid card",
        price: "$9.99",
        classes: ["eid", "honest"]
    },
    {
        src: "images/cards/eid/10.webp",
        head: "Eid card",
        price: "$5.99",
        classes: ["eid", "infinite"]
    }
]


let card_temp = document.querySelector("[data-card-template]");
let container = document.querySelector(".cards-container");
let count = 0;

for(let c of cards_data){
    let clone = card_temp.content.cloneNode(true).children[0];
    clone.setAttribute("onclick", `cardReveal(${count});`);
    clone.querySelector("[data-img]").src = c.src;
    clone.querySelector("[data-img").loading = 'lazy'
    clone.querySelector("[data-head]").innerHTML = c.head;
    clone.querySelector("[data-price]").innerHTML = c.price;
    for (let cls of c.classes){
        clone.classList.add(cls);
    }

    container.appendChild(clone);
    count++;
}



//          modal 

let modal = document.getElementsByClassName('modal-window')[0];
let close = document.getElementsByClassName('modal-close')[0];
let mImg = document.getElementsByClassName("modal-image")[0];
let mHead = document.getElementsByClassName('modal-head')[0];
let mDesc = document.getElementsByClassName('modal-desc')[0];
let mPrice = document.getElementsByClassName('modal-price')[0];

let cPara = document.getElementsByClassName('card-para');
let cHead = document.getElementsByClassName('card-head');
let cPrice = document.getElementsByClassName('card-price');
let cImg = document.getElementsByClassName('card-img');

function cardReveal(num){
    mImg.src = cards_data[num].src;
    mHead.innerHTML = cards_data[num].head;
    mDesc.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto corporis iure porro facilis maiores odit doloribus quidem ipsam, praesentium temporibus.";
    mPrice.innerHTML = cards_data[num].price;

    modal.style.display = "flex";

}

close.onclick = ()=>{
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal){
        modal.style.display = "none";
    }
}

//          modal end
