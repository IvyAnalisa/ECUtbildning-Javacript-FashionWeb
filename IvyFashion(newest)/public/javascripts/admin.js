/*
import { toProductTableRowFragment } from "./domutils.js";

class Product{
    constructor(name,description,image,articleNumber,price ){
        if (!name|| !description||!image||!articleNumber||!price)
        throw new Error ("Invalid parameter");
        this.name = name;
        this.description = description;
        this.image = image;
        this.articleNumber = articleNumber;
        this.price = price;
    }
}
const products = new Map();

const form = document.querySelector("form");
form.addEventListener("submit",event =>
{  event.preventDefault();
    const name = form.name.value;
   const description = form.description.value;
    const image = form.image.value;
    const articleNumber = form.articleNumber.value;
    const price = form.price.value;

     const product = new Product (name,description,image,articleNumber,price);
     products.set(product.name,product);// use name like a primary key
     form.reset();
    updateProductList();
} );   
function updateProductList(){
    const productItem = document.querySelector(".product-item");
    products.forEach(product =>{
        const pName= document.createElement("p");
        pName.innerText = product.name;

        const pPrice= document.createElement("p");
       pPrice.inneText = product.price;

        const div = document.createElement("div");
        div.append(pName,pPrice);
        productItem.append(div);
    }
        );
}*/