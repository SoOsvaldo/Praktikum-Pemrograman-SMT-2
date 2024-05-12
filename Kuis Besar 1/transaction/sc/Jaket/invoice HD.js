document.addEventListener("DOMContentLoaded", function() {
    // Mendapatkan nilai subtotal dari local storage
    var subtotal = localStorage.getItem('harga');
    document.getElementById('hargainv').textContent =new Intl.NumberFormat('en-US', { style: 'currency', currency: 'IDR' }).format(subtotal);;

    // Menghitung total
    var Shipping = 30000

    var totalAmount = Number(subtotal) + Shipping ;
    document.getElementById('total').textContent = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'IDR' }).format(totalAmount);
  }); 
document.addEventListener("DOMContentLoaded", function() {
    // Mendapatkan nilai size dari local storage
    var selectedSize = localStorage.getItem('selectedSize');
    document.getElementById('selected-size').textContent = selectedSize;
});
