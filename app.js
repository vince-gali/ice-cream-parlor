const iceCream = [{
    name: 'Cookie Dough',
    image: 'https://celebratingsweets.com/wp-content/uploads/2014/04/Cookie-Dough-Ice-Cream-1-5.jpg',
    price: 1
}, {
    name: 'Vanilla',
    image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ultimate-vanilla-ice-cream-1628511695.jpg',
    price: 1
}, {
    name: 'Strawberry',
    image: 'https://www.realfoodwithjessica.com/wp-content/uploads/2017/07/paleostrawberryicecream2.jpg',
    price: 2
}]

const toppings = [{
    name: 'Sprinkles',
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Sprinkles2.jpg',
    price: 1,
    quantity: 0
    
}, {
    name: 'Chocolate Chips',
    image: 'https://www.eatthis.com/wp-content/uploads/sites/4/2020/05/chocolate-chips.jpg?quality=82&strip=1&resize=640%2C360',
    price: 2
}]

const containers = [{
    name: 'Waffle Cone',
    image: 'https://m.media-amazon.com/images/I/71VNjBMakfL._SL1500_.jpg',
    price: 2
}, {
    name: 'Waffle Bowl',
    image: 'http://images.wbmason.com/350/L_JOY66050.jpg',
    price: 4
}]

// function buySprinkles(){
//     // console.log('found sprinkles')
//     let foundSprinkles = toppings [0]
//     // console.log('found topping')
//     foundSprinkles.quantity++
//     drawCart()
//     console.log('sprinkle quantity')
// }


function buyTopping(toppingName){
    console.log('buying topping', toppingName)
    let foundTopping = toppings.find(toppings => toppings.name == toppingName)
    foundTopping.quantity++
    console.log(foundTopping)
    drawCart()
}

function drawCart(){
    console.log('drawing cart')
    let template = ''
    toppings.forEach(t => {
        if (t.quantity > 0) {
            template += `<div class="d-flex flex-column justify-content-between">
                        <p>${t.name}</p>
                        <p>${t.quantity}</p>
                        <p>${t.each}</p>
                        <p>$${t.total} </p>
                    </div>`
        }
    })
    document.getElementById('cart').innerHTML = template
    // drawTotal()
}


// function drawTotal(){
// let total = 0
// toppings.forEach(t => t.quantity > 0 ? total += t.quantity * t.price : total += 0)
// console.log(total, 'total');
// document.getElementById('total').innerText = total.toString()
// }