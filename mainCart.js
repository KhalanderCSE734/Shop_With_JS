import products from './api/products.json';
import {getFromLocalStorage} from './storeLocal';
import {loadCarts} from './cartProducts.js';


// console.log(products);
// console.log(getFromLocalStorage);
let arrayFromLocal = getFromLocalStorage();
// console.log(arrayFromLocal);


loadCarts(products,arrayFromLocal);


/* products.forEach((ele)=>{
    arrayFromLocal.forEach((pro)=>{
        if(pro.id===ele.id){
            // console.log(pro);
            const {id, name, category, brand, price, stock, description, image} = ele;
          //  console.log(id);
            console.log(category);
            console.log(image);
            console.log(name);
            console.log(pro.mrp);
            console.log(pro.qty);  //
            const templateClone = document.importNode(templateCart.content,true);
            // console.log(templateClone);
            templateClone.querySelector(".child").setAttribute("id",`child${id}`);
            templateClone.querySelector(".child-info-item").innerText = category;
            templateClone.querySelector(".child-info-image img").src = image;
            templateClone.querySelector(".child-info h2").innerText = name;
            templateClone.querySelector(".child-info p").innerText = `₹${pro.mrp}`;
            templateClone.querySelector(".child-quantity-buttons p").innerText = pro.qty;

            console.log(templateClone);
            parentContainer.appendChild(templateClone);

        }
    })
}) */ 

// localStorage.setItem(`productsSaved`,localStorageArray);



// arrayFromLocal.forEach((ele)=>{
//     console.log(ele);
// })



let cartParent = document.querySelector(".product-items");

cartParent.addEventListener("click",(evt)=>{
    // console.log(cartParent);
    let closeChild = evt.target.closest(".child");
        // console.log(closeChild);
    let id = closeChild.getAttribute("id");
    id = Number(id.slice(5));
    if(evt.target.closest("#plus")){
        // console.log(evt.target);
        // console.log(arrayFromLocal);
        arrayFromLocal.forEach((ele)=>{
            if(ele.id==id && ele.qty<ele.total){
                // console.log(ele);
                ele.qty = ele.qty + 1;
                const newMrp = (ele.qty*Number(ele.prc)).toFixed(2);
                ele.mrp = Number(newMrp);
                // console.log(arrayFromLocal);
                //Now store to local and call the loading of carts function
            }
        })
            

                // localStorage.setItem(`productsSaved`,arrayFromLocal);
                // loadCarts(products,arrayFromLocal);
    }
    if(evt.target.closest("#minus")){
        // console.log(evt.target);
        // console.log(arrayFromLocal);
        arrayFromLocal.forEach((ele)=>{
            if(ele.id==id && ele.qty>0){
                // console.log(ele);
                ele.qty = ele.qty - 1;
                const newMrp = (ele.qty*Number(ele.prc)).toFixed(2);
                ele.mrp = Number(newMrp);
                // console.log(arrayFromLocal);
                //Now store to local and call the loading of carts function
                // localStorage.setItem(`productsSaved`,arrayFromLocal);
                // loadCarts(products,arrayFromLocal);
            }
        })
    }
    if(evt.target.closest(".remove")){
        // console.log(evt.target);
        // console.log(id);
        // console.log(arrayFromLocal);









        let showPro = document.querySelector("#showPro");
        let spanShow = showPro.querySelector("span");
           arrayFromLocal.forEach((ele)=>{
            if(ele.id==id){
                // console.log(ele.name,ele.id);
                spanShow.innerText = ele.name;
                showPro.style.display = "block";
                setTimeout(()=>{
                 showPro.style.display = "none";
                },3000);
            }
           })







        // Literally One line of Code for Deleting the product 😂

        arrayFromLocal = arrayFromLocal.filter((ele)=>{
            return ele.id!=id;
        })
        // console.log(arrayFromLocal);
        // localStorage.setItem(`productsSaved`,arrayFromLocal);
        // loadCarts(products,arrayFromLocal);
        // console.log("Remove Clicked");
        
            
    }

    // console.log(arrayFromLocal);
    // arrayFromLocal = JSON.stringify(arrayFromLocal);      //  // I committed a biggest mistake here I didn't converted it into 'JSON string' my god, I was almost about to die because of this thing 😭😭😭 , somehow I identified thanks a lot god 😭
    localStorage.setItem(`productsSaved`,JSON.stringify(arrayFromLocal));
    loadCarts(products,arrayFromLocal);
})