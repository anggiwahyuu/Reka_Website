const namaPaket = document.getElementById("nama");
const harga = document.getElementById("harga");
const keterangan = document.getElementById("keterangan");
const deadline = document.getElementById("deadline");
const base = document.getElementById("btn-base");
const standard = document.getElementById("btn-standard");
const premium = document.getElementById("btn-premium");

base.addEventListener("click", function(){
    base.classList.add("active");
    standard.classList.remove("active");
    premium.classList.remove("active");

    document.getElementById("li-3").classList.remove("active");
    document.getElementById("li-4").classList.remove("active");

    namaPaket.innerHTML = "GAMBAR SKETSA";
    harga.innerHTML = "Rp50.000";
    keterangan.innerHTML = "Gambar Sketsa Simpel Tanpa Warna Tanpa Detailing";
    deadline.innerHTML = "Deadline Pengerjaan 3 Hari";
});

standard.addEventListener("click", function(){
    standard.classList.add("active");
    base.classList.remove("active");
    premium.classList.remove("active");

    document.getElementById("li-3").classList.add("active");
    document.getElementById("li-4").classList.remove("active");

    namaPaket.innerHTML = "GAMBAR FULL COLOR";
    harga.innerHTML = "Rp100.000";
    keterangan.innerHTML = "Gambar Full Color Tanpa Background";
    deadline.innerHTML = "Deadline Pengerjaan 4 Hari";
});

premium.addEventListener("click", function(){
    premium.classList.add("active");
    base.classList.remove("active");
    standard.classList.remove("active");

    document.getElementById("li-3").classList.add("active");
    document.getElementById("li-4").classList.add("active");

    namaPaket.innerHTML = "GAMBAR FULL BACKGROUND";
    harga.innerHTML = "Rp200.000";
    keterangan.innerHTML = "Gambar Full Color Full Background Tanpa Detailing";
    deadline.innerHTML = "Deadline Pengerjaan 7 Hari";
});