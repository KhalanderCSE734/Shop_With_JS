import {getFromLocalStorage} from './storeLocal.js';


let localLength = JSON.parse(localStorage.getItem(`productsSaved`)) || [];

let counterIcon = document.getElementById("counter");           //To change near cart Item
counterIcon.innerText = localLength.length;
// console.log(counterIcon);


let showPro = document.querySelector("#showPro");


export const addCartFunction = (parentProduct)=>{
    // console.log(parentProduct);
    parentProduct.addEventListener("click",(evt)=>{
        if(evt.target.closest(".cards-cart")){
            const card = evt.target.closest(".cards");
            // console.log(card);
            let productName = card.querySelector(".cards-name");
            let totalAvailable = card.querySelector("span");
            let quantity = card.querySelector(".num");
            let price = card.querySelector(".cards-price-discount");
            totalAvailable = totalAvailable.innerText;
            quantity = quantity.innerText;
            price = price.innerText;
            totalAvailable = parseInt(totalAvailable);
            quantity = parseInt(quantity);
            price = price.slice(1);     // To remove rupees sign
            let actualPrice = price;        //This actualPrice is to add in localStorage
            price = parseFloat(price);
            let cardId = card.getAttribute("id");
            cardId = cardId.slice(4);
            cardId = parseInt(cardId);
            productName = productName.innerText;
            /*
            console.log(cardId);
            console.log(totalAvailable);
            console.log(quantity);
            console.log(price);*/
            price = Number((price*quantity).toFixed(2));
            let detailsObject = {name:productName,id:cardId,total:totalAvailable,qty:quantity,mrp:price,prc:actualPrice};
            // console.log(detailsObject);
            // let localStorageArray = [];     //If I do like this, everytime I'll be getting empty array so We'll try to get this from localStorage     
            // localStorageArray.push(detailsObject);



            //Code before handling Duplicates
            /*
            let localStorageArray = getFromLocalStorage();
            // localStorageArray.forEach((prod)=>{
                
            // })
            localStorageArray.push(detailsObject);
            console.log(localStorageArray);
            localStorageArray = JSON.stringify(localStorageArray);
            localStorage.setItem(`productsSaved`,localStorageArray);
            */
            let localStorageArray = getFromLocalStorage();


            let idPresent = false;
            localStorageArray.forEach((prod)=>{
                if(prod.id===cardId){
                    idPresent = true;
                }
            })
            if(!idPresent){
                localStorageArray.push(detailsObject);
                console.log(localStorageArray);
                localStorageArray = JSON.stringify(localStorageArray)
                localStorage.setItem(`productsSaved`,localStorageArray);
            }else{
               /* localStorageArray.map((pro)=>{
                    if(pro.id===cardId){
                        let newQty = pro.qty + quantity;
                        // let newMRP = pro.mrp + (quantity*price);
                        let newProObj = {...pro,qty:newQty};
                        // let newProObj = {...pro,qty:newQty,mrp:newMRP};
                        return newProObj;
                        // return {...pro,qty:newQty};
                    }
                    return pro;
                })*/
               localStorageArray.forEach((pro,ind)=>{
                    if(pro.id==cardId){
                        let newQty = localStorageArray[ind].qty + quantity;
                        if(newQty<=localStorageArray[ind].total){
                            localStorageArray[ind].qty = newQty;
                            let newMRP = Number((newQty*actualPrice).toFixed(2));
                            localStorageArray[ind].mrp = newMRP;
                        }
                    }
               })
                // console.log(localStorageArray);
                localStorageArray = JSON.stringify(localStorageArray)
                localStorage.setItem(`productsSaved`,localStorageArray);
            }
            /* To update number near cart icon in navbar

            let len = localStorageArray.length;
            counterIcon.textContent = len;
            If I do like this I'll get string length so parse it and do
            */
           localStorageArray = JSON.parse(localStorageArray);
           let len = localStorageArray.length;
           counterIcon.textContent = len;   
           
           let spanShow = showPro.querySelector("span");
           spanShow.innerText = productName;
            showPro.style.display = "block";
            setTimeout(()=>{
                showPro.style.display = "none";
            },3000);
            
        }
    })
}