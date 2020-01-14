document.getElementById('pesan').addEventListener('click', function(){
    if (!liff.isLoggedIn()) {
        alert("Anda Login Dahulu Sebelum Memesan");
        liff.login();
    }else{
        window.open("https://api.whatsapp.com/send?phone=6289695353556&text=Halo Min, harga travel ke Pulau Sepa berapa?");
    }
})
document.getElementById('pesan1').addEventListener('click', function(){
    if (!liff.isLoggedIn()) {
        alert("Anda Login Dahulu Sebelum Memesan");
        liff.login();
    }else{
        window.open("https://api.whatsapp.com/send?phone=6289695353556&text=Halo Min, harga travel ke Pulau Bidadari berapa?");
    }
})
document.getElementById('pesan2').addEventListener('click', function(){
    if (!liff.isLoggedIn()) {
        alert("Anda Login Dahulu Sebelum Memesan");
        liff.login();
    }else{
        window.open("https://api.whatsapp.com/send?phone=6289695353556&text=Halo Min, harga travel ke Pulau Ayer berapa?");
    }
})