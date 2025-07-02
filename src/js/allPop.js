
export function createPopShow(popupElement){
popupElement.style.display = "flex";
setTimeout(() => {
    popupElement.style.opacity = "1";
}, 10);
}


export function closePop(popupElement){
    popupElement.style.opacity = "0";
    setTimeout(() => {
        popupElement.style.display = "none"
    }, 900);
}

export function resetForm(popupElement){
    const inputs = popupElement.querySelectorAll("input");
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = "";
        
    }
}