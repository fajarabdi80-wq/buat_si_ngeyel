const img = document.querySelector(".content .kado");
const kata = document.querySelector(".content .kata");
const button = document.querySelectorAll(".content button");
const ctn = document.querySelector(".content");

function clik(pilihan) {

    // Sembunyikan tombol
    button.forEach(btn => {
        btn.style.display = "none";
    });

    // Ubah ukuran kotak
    ctn.style.height = "400px";
    ctn.style.width = "500px";

    if (pilihan === "iya") {

        img.src = "img/malu.gif";
        kata.textContent = "Ni buat si tukang ngeyel 🤭";

    } else {

        img.src = "img/patahHati.gif";
        kata.textContent = "Parah sih, bilang enggak 😔";

    }

}

function content() {

    ctn.style.width = "400px";
    ctn.style.height = "500px";
    ctn.style.borderRadius = "5px";

    kata.textContent = "Cuma mau ucapin, semangat ya kerjanya. Jangan malas-malasan 😊";

}

function pesanHilang() {

    const divpesan = document.querySelector(".pesan");

    divpesan.style.display = "none";

    content();

    fullLayar();

    musik();

}

function fullLayar() {

    const elem = document.documentElement;

    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
    }

}

setTimeout(() => {

    const span = document.querySelector(".pesan span");

    span.style.opacity = ".2";

}, 1000);

function musik() {

    const msk = document.getElementById("lagu");

    if (msk) {
        msk.play();
        msk.loop = true;
    }

}

setInterval(musik, 147000);