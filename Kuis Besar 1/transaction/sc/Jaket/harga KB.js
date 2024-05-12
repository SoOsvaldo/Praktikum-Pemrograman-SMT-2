document.getElementById('quantity').addEventListener('input', function() {
        
		var quantity = parseInt(this.value);
		var price = 563402; 
		var total = quantity * price;
		document.getElementById('hrgbrg').textContent = 'IDR ' + total.toLocaleString();
		
		// Hitung total harga keseluruhan	
		var delivery = 30000; 
		var totalAmount = total + delivery;
		document.getElementById('jumlah').textContent = 'IDR ' + totalAmount.toLocaleString();

		// Mengirim harga ke halaman receipt
	    localStorage.setItem('harga', total)
	}
   
);
document.getElementById('ukuran').addEventListener('change', function() {
	var selectedSize = this.value;
	localStorage.setItem('selectedSize', selectedSize);
});	