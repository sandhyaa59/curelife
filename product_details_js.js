function changeQuantity(amount) {
    var quantityInput = document.getElementById("quantity");
    var currentQuantity = parseInt(quantityInput.value);
    
    if (currentQuantity + amount >= 1) {
        quantityInput.value = currentQuantity + amount;
    }
}

function addToCart() {
    var quantity = document.getElementById("quantity").value;
    alert("Added " + quantity + " item(s) to the cart!");
}
