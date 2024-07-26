# Sistem Deteksi Penyakit Tanaman Menggunakan Computer Vision

Proyek ini bertujuan untuk mendeteksi penyakit pada tanaman menggunakan teknologi **Computer Vision** dan **Machine Learning**. Sistem ini memungkinkan pengguna untuk mengunggah gambar tanaman dan mendapatkan diagnosis penyakit yang akurat berdasarkan analisis gambar.

## Daftar Isi

- [Deskripsi Proyek](#deskripsi-proyek)
- [Fitur Utama](#fitur-utama)
- [Struktur Direktori](#struktur-direktori)


## Deskripsi Proyek

Proyek ini dirancang untuk membantu petani dan pemilik tanaman dalam mendeteksi penyakit pada tanaman secara cepat dan akurat. Dengan memanfaatkan teknologi **Computer Vision**, sistem ini dapat menganalisis gambar tanaman dan mengidentifikasi penyakit yang mungkin ada.

Proyek ini dibangun menggunakan arsitektur **MERN Stack (MongoDB, Express.js, React.js, dan Node.js)** untuk pengembangan aplikasi web, serta model pembelajaran mesin untuk deteksi penyakit tanaman.

## Fitur Utama

- **Deteksi Penyakit Tanaman:** Unggah gambar tanaman dan dapatkan diagnosis penyakit yang akurat.
- **Autentikasi dan Otorisasi Pengguna:** Sistem login dan registrasi yang aman menggunakan JWT (JSON Web Token).
- **CRUD untuk Gambar dan Pengguna:** Pengelolaan gambar dan pengguna yang terintegrasi dengan baik.
- **Desain Antarmuka Pengguna yang Responsif:** Antarmuka yang ramah pengguna dan mudah digunakan.

## Struktur Direktori

Berikut adalah struktur direktori proyek ini:

```plaintext
plant-disease-detection/
├── backend/
│   ├── config/
│   │   ├── db.js                 # Konfigurasi database MongoDB
│   │   └── keys.js               # Kunci dan variabel lingkungan
│   ├── controllers/
│   │   ├── imageController.js    # Logika kontrol untuk pengolahan gambar
│   │   ├── userController.js     # Logika kontrol untuk pengelolaan pengguna
│   ├── models/
│   │   ├── Image.js              # Skema model gambar
│   │   ├── User.js               # Skema model pengguna
│   ├── routes/
│   │   ├── imageRoutes.js        # Rute API untuk pengolahan gambar
│   │   ├── userRoutes.js         # Rute API untuk pengelolaan pengguna
│   ├── middlewares/
│   │   ├── authMiddleware.js     # Middleware untuk autentikasi
│   │   └── errorMiddleware.js    # Middleware untuk penanganan error
│   ├── utils/
│   │   └── helpers.js            # Fungsi utilitas
│   ├── .env                      # Variabel lingkungan
│   ├── server.js                 # File utama untuk menjalankan server
│   └── package.json              # Informasi dan dependensi proyek
│
├── frontend/
│   ├── public/
│   │   ├── index.html            # File HTML utama
│   │   └── manifest.json         # File manifest
│   ├── src/
│   │   ├── assets/
│   │   │   └── images/           # Gambar aset
│   │   ├── components/
│   │   │   ├── ImageUpload.js    # Komponen unggah gambar
│   │   │   ├── ResultDisplay.js  # Komponen untuk menampilkan hasil
│   │   │   ├── Navbar.js         # Komponen navbar
│   │   ├── pages/
│   │   │   ├── HomePage.js       # Halaman beranda
│   │   │   ├── UploadPage.js     # Halaman unggah gambar
│   │   │   ├── ResultPage.js     # Halaman hasil deteksi
│   │   │   ├── UserPage.js       # Halaman pengguna
│   │   │   └── NotFoundPage.js   # Halaman jika halaman tidak ditemukan
│   │   ├── services/
│   │   │   ├── imageService.js   # Layanan API untuk gambar
│   │   │   ├── userService.js    # Layanan API untuk pengguna
│   │   ├── App.js                # Komponen aplikasi utama
│   │   ├── index.js              # File entri utama aplikasi
│   │   ├── routes.js             # Definisi rute aplikasi
│   │   ├── store/
│   │   │   ├── actions/
│   │   │   │   ├── imageActions.js   # Aksi untuk gambar
│   │   │   │   ├── userActions.js    # Aksi untuk pengguna
│   │   │   ├── reducers/
│   │   │   │   ├── imageReducer.js   # Reducer untuk gambar
│   │   │   │   ├── userReducer.js    # Reducer untuk pengguna
│   │   │   └── store.js          # Konfigurasi toko Redux
│   │   ├── styles/
│   │   │   └── main.css          # Gaya CSS utama
│   │   ├── .env                  # Variabel lingkungan
│   │   └── package.json          # Informasi dan dependensi proyek
│
├── model/
│   ├── train.py                  # Skrip pelatihan model
│   ├── predict.py                # Skrip prediksi model
│   ├── model.h5                  # Model terlatih
│   └── requirements.txt          # Daftar dependensi Python
│
├── README.md                     # Dokumentasi proyek ini
├── .gitignore                    # File untuk mengabaikan file di Git
└── LICENSE                       # Informasi lisensi proyek
