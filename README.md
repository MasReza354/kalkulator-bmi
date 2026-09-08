# ⚖️ Kalkulator BMI (Body Mass Index)

Aplikasi web interaktif untuk menghitung dan menganalisis Indeks Massa Tubuh (BMI / Body Mass Index) secara akurat, modern, dan responsif. Aplikasi ini mendukung perbandingan dua standar klasifikasi kesehatan, yaitu **Standar Indonesia (Kemenkes)** dan **Standar WHO (World Health Organization)**.

![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

---

## 🌟 Fitur Utama

- **Perhitungan Cepat & Akurat:** Menghitung nilai BMI secara instan dari input Berat Badan (kg) dan Tinggi Badan (cm).
- **Dukungan 2 Standar Klasifikasi:** 
  - 🇮🇩 **Standar Indonesia:** Disesuaikan dengan batas ambang batas populasi Asia/Indonesia (Kemenkes).
  - 🌐 **Standar WHO:** Klasifikasi standar internasional menurut World Health Organization.
- **Visualisasi Dinamis & Interaktif:** 
  - Pewarnaan status kategori secara real-time (*Underweight*, *Normal*, *Overweight*, *Obesity*).
  - Animasi transisi halus saat menampilkan hasil.
- **Saran Kesehatan & Aktivitas:** Memberikan rekomendasi pola makan dan aktivitas fisik yang disesuaikan dengan kategori BMI pengguna.
- **Tabel Referensi Lengkap:** Memuat tabel perbandingan batas nilai BMI untuk kedua standar.
- **Ramah Pengguna (UX Friendly):** 
  - Validasi input (mencegah input bernilai negatif atau kosong).
  - Mendukung tombol keyboard `Enter` untuk langsung menghitung.
- **Desain Responsif:** Tampilan optimal di layar ponsel (*mobile-friendly*), tablet, maupun monitor desktop.

---

## 📐 Rumus Perhitungan BMI

Perhitungan Indeks Massa Tubuh dihitung menggunakan rumus standar internasional:

$$\text{BMI} = \frac{\text{Berat Badan (kg)}}{(\text{Tinggi Badan (m)})^2}$$

*Catatan: Tinggi badan yang diinputkan dalam satuan sentimeter (cm) akan dikonversikan otomatis ke meter (m).*

---

## 📊 Tabel Klasifikasi BMI

| Kategori | Standar Indonesia | Standar WHO | Status Warna |
| :--- | :---: | :---: | :---: |
| **Berat Badan Kurang (Underweight)** | $< 18.5$ | $< 18.5$ | 🔵 Biru Muda |
| **Normal / Ideal** | $18.5 - 22.9$ | $18.5 - 24.9$ | 🟢 Hijau |
| **Berat Badan Berlebih (Overweight)** | $23.0 - 24.9$ | $25.0 - 29.9$ | 🟡 Kuning/Oranye |
| **Obesitas I** | $25.0 - 29.9$ | $\ge 30.0$ *(Obesitas)* | 🔴 Merah |
| **Obesitas II** | $\ge 30.0$ | $\ge 30.0$ *(Obesitas)* | 🔴 Merah |

---

## 📁 Struktur Direktori

```text
kalkulator-bmi/
├── index.html        # Struktur HTML utama antarmuka kalkulator
├── style.css         # Desain tampilan modern, variabel warna, & animasi
├── script.js         # Logika matematika BMI, validasi, & manipulasi DOM
├── LICENSE           # Lisensi proyek (MIT License)
└── README.md         # Dokumentasi resmi proyek
```

> *Catatan: Jika file HTML Anda saat ini bernama `index1.html`, Anda dapat mengubah namanya menjadi `index.html` agar langsung terbaca secara default oleh web server atau GitHub Pages.*

---

## 🚀 Cara Menjalankan Proyek Secara Lokal

Proyek ini dibuat menggunakan teknologi web murni (*Vanilla HTML, CSS, JavaScript*), sehingga tidak memerlukan dependensi tambahan atau instalasi package manager (Node.js/npm).

1. **Clone repositori ini ke komputer Anda:**
   ```bash
   git clone https://github.com/MasReza354/kalkulator-bmi.git
   ```
2. **Masuk ke folder proyek:**
   ```bash
   cd kalkulator-bmi
   ```
3. **Jalankan aplikasi:**
   - Cukup klik dua kali (*double click*) file `index.html` untuk langsung membukanya di browser favorit Anda.
   - Atau gunakan ekstensi **Live Server** pada Visual Studio Code.
   - Atau letakkan pada web server lokal seperti **Laragon/XAMPP** di direktori `www` / `htdocs`.

---

## 🛠️ Teknologi yang Digunakan

- **HTML5:** Struktur semantik dokumen web.
- **CSS3:** Pengaturan tata letak responsif (*Flexbox*), CSS Custom Properties/Variables, dan CSS Animations.
- **JavaScript (ES6+):** Logika seleksi kondisi, event handling, dan pembaruan DOM secara asinkron.
- **Google Fonts:** Tipografi modern menggunakan font *Poppins*.

---

## 📄 Lisensi

Proyek ini didistribusikan di bawah lisensi [MIT License](LICENSE). Anda bebas untuk menggunakan, memodifikasi, dan mendistribusikan kode ini untuk keperluan pembelajaran maupun proyek pribadi.

---

## 👤 Penulis

Dibuat dengan ❤️ oleh **[Reza Putra Nurhudaya](https://github.com/rezanurhudaya)** (eja).
