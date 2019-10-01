// variables

const cartBn = document.querySelector('.cart-btn');
const closeCartBtn = document.querySelector('.close-cart');
const clearCartBtn = document.querySelector('.clear-cart');
const cartContent = document.querySelector('.cart-content');
const productsDOM = document.querySelector('.products-center');
const cartItems = document.querySelector('.cart-content');
const cartTotal = document.querySelector('.products-center');

// cart

const cart = [];

class Products {
    async getProducts(){
        try{
        let result = await fetech('products.json');
        let data = await result.json();
        let products = data.items;
        products = products.map(item => {
            const { title, price } = item.fields;
            const {id} = item.sys
            const image = item.fields.image.fields.file.url;
            return {title, price, id, image}
        })

        }catch(error){
        console.log(error)
        }
    }
}

// display products
class UI{

}

class Storage{


}

document.addEventListener("DOMContentLoaded", () =>{
    const ui = new UI();
    const products = new Products();

    // get all products

    products.getProducts().then(data => console.log(data));
     
})
