let templateCart = document.querySelector(".tempCardCart");
// console.log(templateCart);
let parentContainer = document.querySelector(".product-items");
// console.log(parentContainer);

let sub_total = document.querySelector(".sub-total-price");
let final_total = document.querySelector(".final-total-price");

export const loadCarts = (products,arrayFromLocal)=>{

    // Big learning from the repeating thing 
    // Every Single time whenever I'm doing this thing I should Empty the content which was present before
    // parentContainer.innerHTML
    parentContainer.innerHTML = ``;


    products.forEach((ele)=>{
        arrayFromLocal.forEach((pro)=>{
            if(pro.id===ele.id){
                // console.log(pro);
                const {id, name, category, brand, price, stock, description, image} = ele;
              /*  console.log(id);
                console.log(category);
                console.log(image);
                console.log(name);
                console.log(pro.mrp);
                console.log(pro.qty);  */
                const templateClone = document.importNode(templateCart.content,true);
                // console.log(templateClone);
                templateClone.querySelector(".child").setAttribute("id",`child${id}`);
                templateClone.querySelector(".child-info-item").innerText = category;
                templateClone.querySelector(".child-info-image img").src = image;
                templateClone.querySelector(".child-info h2").innerText = name;
                templateClone.querySelector(".child-info p").innerText = `₹${pro.mrp}`;
                templateClone.querySelector(".child-quantity-buttons p").innerText = pro.qty;
    
                // console.log(templateClone);
                parentContainer.appendChild(templateClone);
    
            }
        })
    })
     
    let counterIcon = document.getElementById("counter");           //To change near cart Item
    counterIcon.innerText = arrayFromLocal.length;


    let sum_sub_total = 0;
    // console.log(arrayFromLocal);
    arrayFromLocal.forEach((lastPrice)=>{
        // console.log(lastPrice);
        sum_sub_total = sum_sub_total + Number(lastPrice.mrp) ;
    })
    // console.log(sum_sub_total);
    sum_sub_total = sum_sub_total.toFixed(2);
    sub_total.innerText = `₹${sum_sub_total}`;
    let final_sum = Number((parseFloat(sum_sub_total) + 50).toFixed(2));
    final_total.innerText = `₹${final_sum}`
}