export const getFromLocalStorage = ()=>{
    // let arr = [`${detailsObject}`];
    // let arr = localStorage.getItem(`productsSaved`);
    // let arr = JSON.parse(localStorage.getItem(`productsSaved`));
    let arr = JSON.parse(localStorage.getItem(`productsSaved`)) || [];
    // arr.push(detailsObject);
    return arr;
}