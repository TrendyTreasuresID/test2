function kirimpesan() {

    var produk = document.getElementById('produk');
    var harga = document.getElementById('harga');
    var pembayaran = document.getElementById('pembayaran');
    var nama = document.getElementById('nama');
    var kontak = document.getElementById('kontak');
    var alamat = document.getElementById('alamat');

    var gabungan = 'Produk%20%3A%20' + produk.value + '%0A%0AHarga%20%3A%20' + harga.value + '%0A%0APembayaran%20%3A%20' + pembayaran.value + '%0A%0ANama%20%3A%20' + nama.value + '%0A%0AKontak%20%3A%20' + kontak.value + '%0A%0AAlamat%20%3A%20' + alamat.value;

    var token = '6986545110:AAHcWP18jdttDrO6__KxbA8IQI1s6Drfnwk';
    var group = '-411814099';

    $.ajax({
        url: `https://api.telegram.org/bot6986545110:AAHcWP18jdttDrO6__KxbA8IQI1s6Drfnwk/sendMessage?chat_id=-4118140996&text=${gabungan}&parse_mode=html
        `,
        method: 'POST',
    })
}