let data = {
    "fruits": [{
            "id": 1,
            "name": "Apple",
            "description": "An apple is a sweet, edible fruit produced by an apple tree. Apple trees are cultivated worldwide and are the most widely grown species in the genus Malus.",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Red_Apple.jpg/265px-Red_Apple.jpg",
            "price": 35
        },
        {
            "id": 2,
            "name": "Banana",
            "description": "A banana is an edible fruit – botanically a berry – produced by several kinds of large herbaceous flowering plants in the genus Musa. In some countries, bananas used for cooking may be called plantains, distinguishing them from dessert banana",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Bananas_white_background_DS.jpg/320px-Bananas_white_background_DS.jpg",
            "price": 12
        },
        {
            "id": 3,
            "name": "Grapes",
            "description": "A small bunched fruit used to make wine",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Table_grapes_on_white.jpg/320px-Table_grapes_on_white.jpg",
            "weight": 0.1,
            "price": 45
        },
        {
            "id": 4,
            "name": "Pineapple",
            "description": "a large fruit that goes well with ice cream",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Pineapple_and_cross_section.jpg/286px-Pineapple_and_cross_section.jpg",
            "price": 200
        },
        {
            "id": 5,
            "name": "Tomato",
            "description": "The tomato is the edible, often red, berry of the plant Solanum lycopersicum, commonly known as a tomato plant. The species originated in western South America and Central America.",
            "image": "https://www.kampexport.com/sites/kampexport.com/files/images/legume/image/tomates_256_1.jpg",
            "price": 150
        },
        {
            "id": 6,
            "name": "Cherry",
            "description": "A cherry is the fruit of many plants of the genus Prunus, and is a fleshy drupe. Commercial cherries are obtained from cultivars of several species, such as the sweet Prunus avium and the sour Prunus cerasus.",
            "image": "https://cdn.shopify.com/s/files/1/0610/2881/products/cherries.jpg?v=1446676415",
            "price": 120
        }
    ]
}

myfruit = {
    "id": 0,
    "name": "plum",
    "description": "A plum is a purple fruit.",
    "image": "https://cdn.shopify.com/s/files/1/0610/2881/products/cherries.jpg?v=1446676415",
    "price": 220
}
//adds myfruit object to beginning of fruits array
data.fruits = [myfruit, ...data.fruits];

let cart = [0, 3, 4, 5, 3];
const getCostOf = id => data.fruits[id].price;

        const getTotal = cart => {
            let total = 0;
            cart.forEach(id => total += getCostOf(id))
            return total;
        }

        console.log(getTotal(cart));

        const getRandom = (scale) => Math.floor(Math.random() * scale)
            const fillCart = (cart = []) => {
                let total = 0;
                
                for(let i = 0; total < 900; i++) {
                    let randomNum = getRandom(7);

                    cart.push(data.fruits[randomNum].id);
                    total += data.fruits[randomNum].price;
                    if(1000 <= total) {
                        total -= data.fruits[randomNum].price;
                    }
                }

                    return total;
                }
                
        cart = [];
        console.log(fillCart(cart));
