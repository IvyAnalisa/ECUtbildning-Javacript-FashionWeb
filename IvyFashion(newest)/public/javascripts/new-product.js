
import { toProductTableFragment } from "./domutils.js";
const productsMap = new (Map);
const tbody = document.querySelector("tbody");
const form = document.querySelector("form");
/*const handleOnClick =(articleNumber)=>{
    const product = productsMap.get(articleNumber);
    const productDetails= document.querySelector(".product-detail");
    productDetails.querySelector(".name").innerHTML = product.name;
    productDetails.querySelector(".price").innerHTML = product.price;
   productDetails.querySelector(".image").src = product.imageUrl;
    productDetails.querySelector(".description").innerHTML = product.description;
};*/

// Fetch API
// GET http://localhost:3000/agents
fetch("/api/products")
  .then((resp) => resp.json())
  .then((products) => {
    
    products.forEach(product => productsMap.set( product.name,product.articleNumber,product.price));

    const trFragments = toProductTableFragment(
      products,
     // handleOnClick,

      
    );
      //hidden table
  // tbody.append(...trFragments);
  });

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const product = {
    
    name: form.name.value,
    description :form.description.value,
    image: form.image.value,
    articleNumber: form.articleNumber.value,  
    
    price: form.price.value,
  };

  

  // POST http://localhost:3000/agents
  fetch("/api/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  }).then((resp) => {
    form.reset();
    
    // TODO Ladda INTE om sidan - hitta bättre lösning
    location.reload();
    window.location.href = "index.html";
  });

  
});



