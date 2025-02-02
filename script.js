// Menambahkan event listener pada tombol "Buka Surat"
document.getElementById('openBtn').addEventListener('click', function() {
    // Menampilkan popup sistem
    alert("Sistem: Surat sedang dibuka...");
    
    // Menampilkan surat dengan animasi fade-in
    var letter = document.getElementById('letter');
    letter.classList.add('show');
    
    // Opsional: Nonaktifkan tombol setelah surat dibuka
    this.disabled = true;
  });
  