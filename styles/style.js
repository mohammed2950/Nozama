function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("open-butt").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("open-butt").style.marginLeft = "0";
}


// display data //


let main = document.querySelector('main')
product.forEach(products => {
    main.innerHTML += `
    <div  class="product ${products.categories}" >
        <img src="${products.imgSrc}"
        <a><h2> $${products.price} CAD </h2>
        <h1>${products.name}</h1></a>
        <button  onclick="addtocart(event)"> ADD TO CART </button>
    </div>`
});



// search bar function//
function search(input) {
    let userInput = input.value;
    let products = document.querySelectorAll('.product')

    products.forEach(product => {

        let name = product.querySelector('h1').innerText;
        let price = product.querySelector('h2').innerText;

        if ((name + " " + price).includes(userInput)) {
            product.style.display = 'block'
        } else {
            product.style.display = 'none'
        }
    })
}

// filter function //

function filter(ele) {

    let filters = document.querySelectorAll('.product')

    filters.forEach(product => {

        let alt = product.classList;
        console.log(alt);



        if (alt.contains(ele.innerHTML)) {
            product.style.display = 'block'
        } else {
            product.style.display = 'none'
        }
    })
}

// login //

function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

function login(event) {
    event.preventDefault()

    let founduser = false;
    let userinput = event.target.querySelector('.email').value
    //   console.log(userinput);

    let userpass = event.target.querySelector('.pass').value

    //  console.log(userpass);

    for (let i = 0; i < user.length; i++) {
        let login_user = user[i]
        //   console.log(userinput == user[i].email);
        //   console.log(userpass == user[i].password);
        if (userinput == user[i].email && userpass == user[i].password) {
            console.log('login');

            document.querySelector('.item-counter').style.display = 'block'

        }

    }
}
// add to cart //


let countbut = document.querySelectorAll('main button');
let itemCounter = document.querySelector('.item-counter').innerText;
let counter = 1;

const addtocart = (event) => {

    let total = 0;
        document.querySelector('.item-counter').innerText = +counter++;

    let name = event.target.parentElement.querySelector('h1').innerText;
    let price = event.target.parentElement.querySelector('h2').innerText;
    console.log(name,price);
    
    document.querySelector('.items').innerHTML += `
        <div class='item'>
            <h1>${name}</h1>    
            <h2>${price}<h2>
            <button  onclick="remove(event)" class="remove">Remove</button>
        </div>
    `
    
}
// image info //

const remove = (event) =>{
   document.querySelector('.item').remove();
}
const display = () => {

    document.querySelector('.addedItems').style.display = "block";
    
}

function closeButton() {
    document.querySelector('.addedItems').style.display = "none";
}