
  export const toProductTableFragment = (products) =>
  products.map((product) => {
    const template = document.getElementById("product-table-row");
   
    const trFragment = template.content.cloneNode(true);  
   //DisplAY TATBLE
    trFragment.querySelector(".name").innerText = product.name;
 // trFragment.querySelector(".description").innerText = product.description;
    trFragment.querySelector(".articleNumber").innerText = product.articleNumber;
    trFragment.querySelector(".price").innerText = product.price;
 //trFragment.querySelector(".image").src = product.imageUrl;
    const tr = trFragment.querySelector("tr");

    tr.dataset.articleNumber = product.articleNumber;
   //DISPLAY PRODUCT DETAIL
  /*tr.addEventListener("click",function(){
      const articleNumber = this.dataset.articleNumber;
      onRowClick(articleNumber);
   })*/

    return trFragment;

  });
