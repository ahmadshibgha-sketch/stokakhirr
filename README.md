# Stok Akhir Kopi — Landing Page Vercel

Website **satu halaman** untuk Stok Akhir Kopi, dibuat dari desain krem–cokelat yang disetujui. Tanpa framework dan tanpa proses build; dapat di-deploy langsung sebagai **Static Site** di Vercel.

## Letak gambar produk (penting)

File gambar asli website berada di **folder `assets/`**, sejajar dengan `index.html`:

```
index.html
styles.css
script.js
config.js
assets/
  hero-product.webp       <-- foto besar di kanan headline
  real-product.webp       <-- foto asli yang Anda upload
  photo-product.webp      <-- galeri produk
  photo-brand-detail.webp
  photo-lid.webp
  photo-ice.webp
  favicon.svg
```

**Perbaikan versi ini:** bila file `.webp` tidak termuat saat preview karena folder `assets` tidak ikut disalin, semua gambar visual produk memiliki cadangan gambar tertanam (embedded fallback) di `index.html` dan tetap terlihat. Namun **tetap upload folder `assets/`** agar website dan preview sosial bekerja optimal.

Untuk cek deployment: akses `https://NAMA-SITUS.vercel.app/assets/hero-product.webp` — seharusnya muncul foto kopi, bukan 404. Jika 404, periksa bahwa seluruh **isi folder proyek** diunggah, bukan hanya `index.html`, dan **Root Directory** di pengaturan Vercel menunjuk ke folder yang berisi `index.html`.

## Wajib sebelum deploy

Buka file **`config.js`**, lalu isi nomor WhatsApp toko dengan kode negara Indonesia, **tanpa `+`, spasi, atau angka `0` di depan**:

```js
window.STOK_AKHIR_CONFIG = {
  whatsappNumber: "628xxxxxxxxxx", // Ganti dengan nomor WhatsApp toko sebenarnya
  whatsappMessage: "Halo Stok Akhir Kopi! Saya mau pesan kopi Rp18.000 per gelas. Apakah stoknya masih tersedia?",
};
```

Jika nomor belum diisi, tombol pemesanan akan memberi peringatan setup, **bukan mengirim pesanan ke nomor fiktif**.

## Deploy ke Vercel

### Pilihan A — GitHub (disarankan)

1. Ekstrak ZIP, ubah `config.js` seperti di atas.
2. Buat repository GitHub, upload seluruh isi folder proyek (file `index.html` berada di root repo).
3. Di https://vercel.com/new, pilih **Import Git Repository** dan repository tadi.
4. Pada Build & Output Settings, pilih framework **Other**; **Build Command** dibiarkan kosong, **Output Directory** root (`.`) jika diminta. Klik **Deploy**.
5. Buka URL `.vercel.app` yang diberikan Vercel dan uji tombol WhatsApp dari HP.

### Pilihan B — Vercel CLI

Di terminal pada folder proyek:

```bash
npx vercel --prod
```

Login ke Vercel jika diminta. Saat konfigurasi, gunakan pengaturan proyek statis tanpa build command.

## Jalankan secara lokal

```bash
python -m http.server 8000
```

Lalu buka http://localhost:8000.

## Yang sudah ada

- Hero dengan foto visual promosi produk yang terlihat lebih penuh.
- Masalah pembeli (3), manfaat (3), galeri foto, harga Rp18.000, FAQ (4), CTA WhatsApp pada beberapa posisi.
- Responsif untuk ponsel dan desktop, menu mobile, FAQ interaktif, gambar WebP, `alt` gambar, meta description dan Open Graph.
- Foto **asli** produk dari pengguna tetap dimasukkan ke galeri sebagai pembanding, sementara versi yang diolah ditandai sebagai visual promosi.
- Tidak ada testimoni, angka penjualan, klaim kualitas bahan, atau garansi yang dibuat-buat.

## Aset dan kejujuran visual

`assets/real-product.webp` adalah foto produk asli yang disediakan. Foto lain dari desain revisi adalah hasil olahan promosi; karena tingkat isi minumannya telah ditambah secara visual, **pastikan promosi sesuai dengan produk nyata** sebelum dipublikasikan. Jika tidak sesuai, ganti gambar promosi dengan foto terbaru produk asli.

## Pengubahan konten

- Copy, harga, FAQ, navbar: `index.html`.
- Warna dan layout: `styles.css`.
- Nomor WA dan template pesan pesanan: `config.js`.
- Interaksi tombol dan menu: `script.js`.

## Status

Paket ini **siap diunggah ke Vercel**. Belum dideploy ke akun Vercel mana pun dan belum memiliki nomor WhatsApp toko yang terverifikasi.
