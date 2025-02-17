export function setupCounter(parentProduct) {
  parentProduct.addEventListener("click",(evt)=>{
    if(evt.target.closest(".plus")){
        // console.log(Math.random());
        // console.log(evt.target);
        const numElement = evt.target.nextElementSibling;
        if(numElement && numElement.classList.contains("num")){
            // console.log(numElement); 
            let currentValue = parseInt(numElement.textContent);    //Don't use innerText
            // console.log(currentValue);
            let card = evt.target.closest(".cards");
            let qt = parseInt(card.querySelector("span").textContent);
            if(currentValue<qt){
               numElement.innerText = currentValue + 1 ;  
            }
              
        }
    }
    if(evt.target.closest(".minus")){
        // console.log(Math.random());
        // console.log(evt.target);
        const numElement = evt.target.previousElementSibling;       // This is in order to select next or previous sibling like 'closest' method 
        if(numElement && numElement.classList.contains("num")){
            // console.log(numElement); 
            let currentValue = parseInt(numElement.textContent);    //Don't use innerText
            if(currentValue>1){
            numElement.innerText = currentValue - 1 ; 
            }  
        }
    }
})
}
