/*class ProductCard {
    constructor(data) {
      this.data = data;
    }
    render(selector) {
      const container = document.querySelector(selector);
      container.insertAdjacentHTML(
        "beforeend",
        ` <div>
      <a href="product-details.html?id=${this.data.id}">
          <img
          src="${this.data.imageUrl}"
          alt="Product"
          style="width:250px; height:300px;"
          />
      </a>
      <div class="productinfo">
        <div>${this.data.name}</div>
        <div>${this.data.price}kr</div>
      </div>
    </div>`
      );
    }
  }
  
  fetch("/api/products")
    .then((response) => response.json())
    .then((products) => {
      for (let product of products) {
        const productCard = new ProductCard(product);
        productCard.render(".products > div");
      }
    })
    .catch((error) => console.error(error));

*/

// Fetch API for index.html
// GET http://localhost:3000/products

fetch ("/api/products")

.then (response=>response.json())

.then (products=> {

    for (let product of products ){

      // const productCard= new ProductCard(product)
const x = `
            <div class="col-4" id ="products"  >
                <div class="card" >
              
                <div class="card-body" >


                <a onclick='window.location.href="product-detail.html?id=${product.id}"'>
                    <image class = "image"  src=" ${product.imageUrl}" >
                   </a>
                    <h5 class ="price"  > ${product.price} kr</h5>
                    <h5 class="name ">${product.name}</h5>  <br>
                                      
                                                
                             

                      

                       
                        
                    </div>
                </div>
            </div>
        `

        document.getElementById('products').innerHTML = document.getElementById('products').innerHTML + x;
       
    }
});


/*fetch('/api/products')
    .then((products) => {
        return products.json();

    })
    .then((products) => {

        let data = "";
        products.map((product) => {
            data += `
            <div class="col-4" >
            <div class="card-item">
           
            <img src="${product.imageUrl}" alt="img" class="card-image"  
            onClick="setViewDetail(${product.id})  >
            <h1 class="card-name">${product.name}</h1>
            
            <p class="card-price">$${product.price}</p>
            <button id="myButton" class="float-left submit-button"  >View</button>
           
            <p> CLICK ON IMAGE FOR MORE INFO</p>

        </div> 
        </div>`

        
            //click view button event
            
        // Getting the table element
        var cards = document.getElementsByClassName("card-item");
 
        // Looping over tables
        for (var i = 0; i < cards.length; i++) {
 
            // Get the ith table
            var card = cards[i];
 
            // Set the id dynamically
            card.setAttribute("id", i + 1);
 
            // The line below will also give id
            // dynamically to the tables
            //table.id = i+1;
        }
        
        
        });

       

       document.getElementById("cards").innerHTML = data;
        const lightbox = document.createElement('div')
                    lightbox.id = 'lightbox'
                    document.body.appendChild(lightbox)

                    const images = document.querySelectorAll('img')
                    images.forEach(image => {
                        image.addEventListener('click', e => {
                            lightbox.classList.add('active')
                            const newDiv = document.createElement("img");
                            const div = document.createElement("div");

                           document.innerHTML ="hello"
                            
                            newDiv.src = image.src


                            const c = document.getElementsByClassName("card")
                            
                        })
                    })

        
    }).catch((err) => {
        console.log(err);
    })
    onclick="window.location.href='/product-detail.html?id=${this.data.id}
    */
