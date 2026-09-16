const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

if (navToggle && navMenu) {
    navToggle.addEventListener("click", function () {
        navMenu.classList.toggle("active");

        const menuTerbuka = navMenu.classList.contains("active");

        navToggle.setAttribute(
            "aria-expanded",
            menuTerbuka ? "true" : "false"
        );
    });
}

const navLinks = document.querySelectorAll(".nav-menu a");

for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("click", function () {
        if (navMenu) {
            navMenu.classList.remove("active");
        }
    });
}


/* FUNGSI */

function tampilkanPesan(pesan) {
    alert(pesan);
}

const tampilkanNama = function (nama) {
    return "Halo, " + nama + "!";
};

const buatSapaan = (nama) => {
    return "Selamat datang, " + nama + "!";
};


/* CONSTRUCTOR */

function Profil(nama, jurusan, kelas) {
    this.nama = nama;
    this.jurusan = jurusan;
    this.kelas = kelas;
}

const profilSaya = new Profil(
    "Asyifa Nur Cahya Kamila",
    "Teknik Komputer",
    "Tekom C"
);


/* ARRAY DAN CRUD */

let daftarKeahlian = [
    "HTML",
    "CSS",
    "JavaScript"
];

function tambahKeahlian(data) {
    daftarKeahlian.push(data);
}

function ubahKeahlian(index, dataBaru) {
    if (index >= 0 && index < daftarKeahlian.length) {
        daftarKeahlian[index] = dataBaru;
    }
}

function hapusKeahlian(index) {
    if (index >= 0 && index < daftarKeahlian.length) {
        daftarKeahlian.splice(index, 1);
    }
}


/* TOMBOL PROYEK */

const tombolProyek = document.querySelectorAll(".project-link");

for (let i = 0; i < tombolProyek.length; i++) {

    tombolProyek[i].addEventListener("click", function () {

        console.log(
            "Proyek dipilih: " +
            (i + 1)
        );

    });
}


/* SERTIFIKAT */

function bukaSertifikat(item) {

    const modal = document.getElementById("lightboxModal");
    const gambar = document.getElementById("lightboxImg");

    if (!modal || !gambar) {
        return;
    }

    const sumber = item.getAttribute("data-full-img");

    if (sumber) {

        gambar.src = sumber;

        modal.classList.add("active");
    }
}


function tutupSertifikat() {

    const modal = document.getElementById("lightboxModal");
    const gambar = document.getElementById("lightboxImg");

    if (modal) {
        modal.classList.remove("active");
    }

    if (gambar) {
        gambar.src = "";
    }
}


const sertifikat = document.querySelectorAll(
    ".certificate-image, " +
    ".certificate-item, " +
    ".sertifikat-item"
);

for (let i = 0; i < sertifikat.length; i++) {

    sertifikat[i].addEventListener("click", function () {

        bukaSertifikat(sertifikat[i]);

    });
}


const tombolClose = document.getElementById("lightboxClose");

if (tombolClose) {

    tombolClose.addEventListener(
        "click",
        tutupSertifikat
    );

}


const modalSertifikat =
    document.getElementById("lightboxModal");

if (modalSertifikat) {

    modalSertifikat.addEventListener(
        "click",
        function (event) {

            if (event.target === modalSertifikat) {

                tutupSertifikat();

            }

        }
    );

}


document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {

            tutupSertifikat();

        }

    }
);


/* SLIDER PENGALAMAN */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const slides =
            document.querySelectorAll(
                ".experience-slide"
            );

        const nextButton =
            document.querySelector(
                ".experience-next"
            );

        const prevButton =
            document.querySelector(
                ".experience-prev"
            );

        const dots =
            document.querySelectorAll(
                ".experience-dot"
            );

        const track =
            document.querySelector(
                ".experience-slides"
            );


        let slideSekarang = 0;


        function tampilkanSlide(index) {

            if (slides.length === 0) {
                return;
            }


            if (index >= slides.length) {

                slideSekarang = 0;

            }


            if (index < 0) {

                slideSekarang =
                    slides.length - 1;

            }


            if (track) {

                track.style.transform =
                    "translateX(-" +
                    (slideSekarang * 100) +
                    "%)";

            }


            for (
                let i = 0;
                i < dots.length;
                i++
            ) {

                dots[i].classList.remove(
                    "active"
                );

            }


            if (dots[slideSekarang]) {

                dots[
                    slideSekarang
                ].classList.add("active");

            }

        }


        if (nextButton) {

            nextButton.addEventListener(
                "click",
                function () {

                    slideSekarang++;

                    tampilkanSlide(
                        slideSekarang
                    );

                }
            );

        }


        if (prevButton) {

            prevButton.addEventListener(
                "click",
                function () {

                    slideSekarang--;

                    tampilkanSlide(
                        slideSekarang
                    );

                }
            );

        }


        for (
            let i = 0;
            i < dots.length;
            i++
        ) {

            dots[i].addEventListener(
                "click",
                function () {

                    slideSekarang = i;

                    tampilkanSlide(
                        slideSekarang
                    );

                }
            );

        }


        tampilkanSlide(
            slideSekarang
        );

    }
);


/* ANIMASI PORTOFOLIO */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const gambarPortofolio =
            document.querySelectorAll(
                ".project-image img, " +
                ".experience-slide img, " +
                ".mc-image img, " +
                ".certificate-image img"
            );


        for (
            let i = 0;
            i < gambarPortofolio.length;
            i++
        ) {

            gambarPortofolio[i].animate(
                [
                    {
                        opacity: 0
                    },
                    {
                        opacity: 1
                    }
                ],
                {
                    duration: 700,
                    delay: i * 100,
                    easing: "ease",
                    fill: "forwards"
                }
            );

        }

    }
);


/* FORM KONTAK */

const contactForm =
    document.getElementById(
        "contactForm"
    );


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const nama =
                document
                    .getElementById("name")
                    .value
                    .trim();


            const email =
                document
                    .getElementById("email")
                    .value
                    .trim();


            const pesan =
                document
                    .getElementById("message")
                    .value
                    .trim();


            if (nama === "") {

                alert(
                    "Nama belum diisi!"
                );

            }

            else if (email === "") {

                alert(
                    "Email belum diisi!"
                );

            }

            else if (pesan === "") {

                alert(
                    "Pesan belum diisi!"
                );

            }

            else {

                alert(
                    "Pesan berhasil dikirim!"
                );

                contactForm.reset();

            }

        }
    );

}


/* PROMPT HALAMAN HOME */

if (
    window.location.pathname.endsWith(
        "index.html"
    ) ||
    window.location.pathname === "/" ||
    window.location.pathname === ""
) {

    if (
        !sessionStorage.getItem(
            "sudahDisapa"
        )
    ) {

        const nama =
            prompt(
                "Masukkan nama kamu:"
            );


        if (
            nama !== null &&
            nama.trim() !== ""
        ) {

            alert(
                "Halo, " +
                nama +
                "! Selamat datang di portfolio saya."
            );

        }

        else {

            alert(
                "Selamat datang di portfolio saya!"
            );

        }


        sessionStorage.setItem(
            "sudahDisapa",
            "true"
        );

    }

}


/* SWITCH */

const statusPortofolio =
    "aktif";


switch (statusPortofolio) {

    case "aktif":

        console.log(
            "Portfolio sedang aktif."
        );

        break;


    case "nonaktif":

        console.log(
            "Portfolio sedang tidak aktif."
        );

        break;


    default:

        console.log(
            "Status portfolio tidak diketahui."
        );

}


/* ARRAY PROYEK */

const daftarProyek = [
    "TWOROUTINE",
    "GO DAMKAR"
];


for (
    let i = 0;
    i < daftarProyek.length;
    i++
) {

    console.log(
        "Proyek " +
        (i + 1) +
        ": " +
        daftarProyek[i]
    );

}


/* WHILE */

let hitung = 1;


while (hitung <= 3) {

    console.log(
        "Perulangan while ke-" +
        hitung
    );

    hitung++;

}


/* DO WHILE */

let angka = 1;


do {

    console.log(
        "Perulangan do while ke-" +
        angka
    );

    angka++;

} while (angka <= 3);