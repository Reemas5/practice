const p = document.getElementsByClassName("fruit")
for (let fruit of p) {
    if (fruit.textContent === "Orange") {
        fruit.style.backgroundColor = "yellow";  
    
    }
   fruit.style.fontWeight = "bold"; 
}
