




let grid = document.querySelector(".products");
let filterInput = document.getElementById("filterInput");

fetch('/api/products')
    .then(res => res.json())
    .then(products =>{

        // iterating products
        for (let value of products){
            
          addElement(grid, value)
          
        }
        
    });


// add event listener
filterInput.addEventListener('keyup', filterProducts);

// callback function 
function filterProducts(){
    let filterValue = filterInput.value.toUpperCase();
    let  item = grid.querySelectorAll('.item')
    //console.log(filterValue);
   
    for (let i = 0; i < item.length; i++){
       
        let td = item[i].querySelector('.name');
       
        if (td.innerHTML.toUpperCase().indexOf(filterValue) >-1)
        {
            item[i].style.display = "initial";
        }else{
            item[i].style.display = "none";
        }
       

    }
    
}
function addElement(appendIn, value){
    let div = document.createElement('div');
  
    div.className = "item justify-self-center   ";

    let { name,articleNumber, price } = value;

    div.innerHTML = `
            
            
           <table >
                <tbody>
                     <tr>
                        <td class="name">${name}</td>
                        <td>${articleNumber}</td>
                        <td>${price}</td>
                     </tr>
                </tbody>
           </table> 
        
           
    `
    
    
    ;
    appendIn.appendChild(div);
}


