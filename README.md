# Portofolio Pribadi — Asyifa Nur Cahya Kamila
**Mata Kuliah:** Praktikum Pemrograman Web &bull; Teknik Komputer, Universitas Negeri Makassar (UNM)  
**Konsep Visual:** Soft Pink Editorial Digital Book

---

## 1. Deskripsi Proyek
Proyek ini merupakan implementasi website portofolio pribadi berbasis **HTML5**, **CSS3**, dan **Vanilla JavaScript** yang memadukan estetika *Editorial Magazine, Digital Book,* dan *Minimalist Personal Portfolio*. Proyek ini disusun untuk memenuhi penilaian akademik praktikum pemrograman web dengan mengintegrasikan secara komprehensif seluruh materi dari **Modul 3, Modul 4, Modul 5, Modul 6**, serta alur kerja **Version Control System (Git & GitHub)**.

---

## 2. Struktur File & Direktori Proyek

Proyek ini mempertahankan 4 file utama yang wajib dengan susunan rapi sebagai berikut:

```text
latihan-git/
├── index.html          # Halaman Utama (Cover Minimal, 2 Pengalaman, 2 Proyek, 6 Sertifikat)
├── about.html          # Halaman Biodata (Profil & Penjelasan Diri, Foto Portret, Linimasa Pendidikan & 2 Kolom Keahlian)
├── contact.html        # Halaman Kontak (Saluran Resmi: Instagram & Gmail, Formulir Pesan)
├── README.md           # Laporan Dokumentasi & Pemetaan Implementasi Modul
├── css/
│   └── style.css       # Seluruh styling tema digital book, layout multi-kolom 2-kolom, dropdown & responsif
├── js/
│   └── script.js       # Interaktivitas: Hamburger Menu, Sticky Nav, Lightbox Modal & Form Toast
└── images/
    ├── profile/        # Foto profil
    ├── pengalaman/     # Dokumentasi pengalaman (osis, duta)
    ├── proyek/         # Dokumentasi proyek (tworoutine, kebakaran)
    └── sertifikat/     # Dokumentasi sertifikat (sertifikat-1 s/d sertifikat-6)
```

---

## 3. Pemetaan & Kelengkapan Implementasi Modul Praktikum

Berikut adalah rincian pembuktian integrasi teknis setiap materi modul ke dalam elemen portofolio:

### Modul 3: CSS (Cascading Style Sheet) & Selector
- **External CSS (`css/style.css`)**: Seluruh aturan presentasi visual dipusatkan pada file eksternal `css/style.css` yang dihubungkan melalui `<link rel="stylesheet" href="css/style.css">` pada `<head>` setiap halaman HTML (`index.html`, `about.html`, `contact.html`).
- **Implementasi Ragam Selector**:
  - *HTML Selector*: Pengaturan fundamental pada tag semantik HTML (`body`, `h1`, `h2`, `h3`, `h4`, `p`, `img`, `a`, `ul`, `li`, `input`, `textarea`, `button`, `footer`).
  - *Class Selector*: Pengorganisasian komponen modular seperti `.journal-sheet`, `.cover-minimal-layout`, `.pengalaman-editorial-grid`, `.pengalaman-item`, `.proyek-card`, `.proyek-desc`, `.about-bio-desc`, `.sertifikat-gallery-grid`, `.contact-minimal-grid`, `.contact-entry-card`, dll.
  - *ID Selector*: Penanda section unik dan target anchor navigasi seperti `#home`, `#pengalaman`, `#proyek`, `#sertifikat`, `#mainNavbar`, `#menuNav`, `#contactForm`, `#lightboxModal`.
  - *Grouping Selector*: Pengelompokan selector untuk efisiensi kode (misal `*, *::before, *::after` untuk CSS reset, `h1, h2, h3, h4, h5, h6` untuk hierarki heading serif, serta link states).
- **Typography & Formatting**: Membangun hierarki tipografi editorial menggunakan *Playfair Display* (editorial serif untuk judul) dan *Plus Jakarta Sans* (clean sans-serif untuk teks isi), dengan penataan ukuran dan bobot yang proporsional.

### Modul 4: CSS Image & Backgrounds
- **Background Styling**:
  - `background-color`: Penggunaan palet harmonis `#F6EEF1` (background canvas), `#FFFDF9` (paper sheet), `#FAF4F6` (paper tint), dan `#F3ECE7` (cream matting).
  - `background-image`: Penerapan `radial-gradient` bertingkat dan `linear-gradient` halus pada latar canvas.
- **Image Properties**:
  - Penentuan dimensi terukur (`width`, `height`) dan proporsi `object-fit: cover` untuk menjaga ketajaman visual foto profil, dokumentasi kegiatan (OSIS & Duta), screenshot proyek (Tworoutine & Go Damkar), dan galeri 6 sertifikat.
  - Garis bingkai halus (`border: 1px solid var(--border-light)` dan `border-radius: var(--radius-card)`).
  - Efek transisi hover halus (`opacity: 0.95; transition: transform 0.5s ease, opacity 0.35s ease;` dan saat `:hover` menjadi `opacity: 1; transform: scale(1.02);`).

### Modul 5: CSS Navigasi dan Layout Multi-Kolom
- **Struktur Navigasi Dasar**: Menggunakan daftar tak bernomor semantik 4 menu (`<ul>`, `<li>`, `<a>`): **BERANDA**, **TENTANG SAYA**, **PORTOFOLIO ▾**, dan **KONTAK**.
- **Navigasi Horizontal & Sticky**: Menu navigasi horizontal (`display: flex;`) dengan efek sticky (`position: sticky; top: 15px;`), status aktif (`.nav-link.active`), dan efek hover.
- **Struktur Layout Web Lengkap & Multi-Kolom**:
  - *Header & Navigasi*: Bilah navbar melayang berlatar blur transparan (`backdrop-filter: blur(16px)`).
  - *Layout 2 Kolom*: Diterapkan pada Cover Home (`.cover-minimal-layout`), Pengalaman & Organisasi 2 Kolom (`.pengalaman-editorial-grid`), Biodata About (`.about-minimal-grid`), Berkas 2 Proyek (`.proyek-card`), dan Halaman Kontak (`.contact-minimal-grid`).
  - *Layout Multi-Grid*: Diterapkan pada Galeri 6 Sertifikat (`.sertifikat-gallery-grid`).
  - *Footer*: Elemen `<footer>` semantik penutup di bagian bawah setiap halaman.

### Modul 6: CSS Navigasi Lanjutan & Visual Effects
- **Multi-Level Dropdown Navigation**: Menu dropdown bertingkat pada item navigasi `PORTOFOLIO` (`.has-dropdown:hover .dropdown-menu`) dengan animasi transisi kehalusan opasitas dan pergeseran posisi (`transition: all 0.28s cubic-bezier(0.25, 0.8, 0.25, 1)`).
- **Efek Sudut Melengkung (*Border Radius*)**: Pemanfaatan `border-radius` pada lembaran jurnal (`22px`), kartu frame (`14px`), dan tombol oval (`50px`).
- **Linear Gradient**: Penerapan gradasi warna halus (`linear-gradient`) pada latar dropdown menu dan tombol aksi.
- **Bayangan Realistis (*Box Shadow*)**: Pengaturan bayangan berlapis (`box-shadow`) yang halus untuk memberikan kedalaman lembaran kertas jurnal yang berkarakter tanpa efek berlebihan.

---

## 4. Alur Kerja Version Control System (Git & GitHub)

Berdasarkan modul Git, alur pengelolaan repositori proyek dilakukan dengan perintah standar:

```bash
# 1. Inisialisasi Git Repository
git init

# 2. Menambahkan seluruh file ke Staging Area
git add .

# 3. Menyimpan checkpoint perubahan kode (Commit)
git commit -m "feat: complete clean editorial digital book portfolio with 2 projects, bio description, and 6 certificates"

# 4. Memeriksa status repositori
git status

# 5. Melihat riwayat checkpoint commit
git log --oneline

# 6. Menghubungkan dan Push ke Remote Repository GitHub
git branch -M main
git remote add origin https://github.com/asyifanurcahyakamila/latihan-git.git
git push -u origin main
```

---

## 5. Ringkasan Konten Utama Portofolio

1. **Cover (Halaman 1)**:
   - `PORTOFOLIO` &bull; `ASYIFA NUR CAHYA KAMILA` &bull; Foto Profil
2. **Pengalaman & Organisasi (Halaman 2)**:
   - `01 KETUA OSIS (2023 / 2024)`
   - `02 DUTA PELAJAR GOWA (2025)`
3. **Proyek (Halaman 3)**:
   - `01 TWOROUTINE` (Aplikasi Website Pengingat Rutinitas)
   - `02 GO DAMKAR` (Aplikasi Pemanggil Bantuan Kejadian)
4. **Sertifikat (Halaman 4)**:
   - `SERTIFIKAT` (6 Sertifikat dengan Lightbox Modal)
5. **Tentang Saya & Pendidikan (about.html)**:
   - Profil & Penjelasan Diri
   - `Universitas Negeri Makassar (S1 Teknik Komputer, 2025 — Sekarang)`
   - `SMKN 2 Gowa (2023 — 2025)`
   - `Keahlian Teknis: C++, Python, Jaringan Komputer`
   - `Keahlian Non-Teknis: Public Speaking, Puisi, Kepemimpinan`
6. **Kontak (contact.html)**:
   - `Instagram: @syfrynnn`
   - `Gmail: asyifanurcahyakamila@gmail.com`
   - Formulir pesan langsung
