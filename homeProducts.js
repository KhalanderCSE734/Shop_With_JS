const productContainer = document.querySelector(".shopping-products");
const template = document.querySelector(".tempCard");

export const showProducts = (items)=>{
    if(!items){
        return false;             //If we don't have any products, then we'll simply return from the function
    }
    items.forEach((curItem,ind)=>{
        const {id, name, category, brand, price, stock, description, image} = curItem;  //Power of Destructuring
        /*console.log(id);
        console.log(name);
        console.log(category);
        console.log(brand);
        console.log(price);
        console.log(stock);
        console.log(description);
        console.log(image);*/
        const templateClone = document.importNode(template.content,true); //It'll create the copy of template from html
        templateClone.querySelector(".cards-item").innerText = category;
        templateClone.querySelector(".cards-name").innerText = name;
        templateClone.querySelector(".cards-desc").innerText = description;
        templateClone.querySelector(".cards-price-discount").innerText = `₹${price}`;
        templateClone.querySelector(".cards-price-discount").setAttribute('id',`price${ind+1}`);
        let pr =(price * 3).toFixed(2); 
        templateClone.querySelector(".cards-price-original").innerText = pr;
        templateClone.querySelector(".cards-available span").innerText = stock;
        templateClone.querySelector(".cards-image img").src = image;
        // templateClone.querySelector(".cards-item").innerText = category;
       const temp =  templateClone.querySelector(".cards").setAttribute('id', `card${ind+1}`);
    // templateClone.querySelector(".cards-item").innerText = category;
        productContainer.appendChild(templateClone);
        // template.querySelector(".class").setAttribute('id',`card${ind}`)
    })

}


