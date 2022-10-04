const urlParams = new URLSearchParams(window.location.search);
const productID = urlParams.get("id");
fetch (`/api/products/${productID}`)

.then (response=>response.json())

.then (products=> {    
      const x= `
      <div class="row mb-4">
         <img class="d-block col-5" style="float:left" width="200" height="400"
           src="${products.imageUrl}" alt="Card image cap">
           <div class="col-7">
           <div class="card-body">
             <h5 class="card-title">${products.name}</h5>
             <p class="card-text">${products.description}</p>
             <h3 class="card-text">${products.price} SEK</h3>
             <button>Add to cart</button>
           </div>
         </div>
         </div>          
      
           
        `

        document.getElementById('products').innerHTML = document.getElementById('products').innerHTML + x;
      
       
      

});



