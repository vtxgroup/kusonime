# 🎌 Kusonime Anime API - VTX Group

API ini memberikan akses ke data anime dari [Kusonime](https://kusonime.com) dalam format JSON yang mudah dipakai untuk keperluan front-end, project scraping, maupun aplikasi anime.

> Dibuat dengan ❤️ oleh **VTX Group**

---

## 📦 Fitur

- Mendapatkan daftar anime terbaru dari Kusonime
- Mendapatkan detail lengkap dari setiap anime
- Mendapatkan semua link download (Google Drive, Mega, Terabox, dll)
- Tersedia resolusi 360p, 480p, 720p, dan 1080p (jika tersedia)
- Include informasi genre, sinopsis, banner, skor, dan lainnya

---

## 📍 Base URL

```
https://api.vtx.my.id/api
```

---

## 🔧 Endpoints

| Method | Endpoint    | Deskripsi                                                |
| ------ | ----------- | -------------------------------------------------------- |
| GET    | `/kusonime` | Ambil semua data anime dari Kusonime (gunakan query `q`) |

### 🔎 Parameter

- `q` → Slug anime, contoh: `tenkuu-no-escaflowne-bd-batch-subtitle-indonesia`

Contoh:

```
GET https://api.vtx.my.id/api/kusonime?q=tenkuu-no-escaflowne-bd-batch-subtitle-indonesia
```

---

## 🧪 Contoh Response

### Endpoint: `/kusonime?q=tenkuu-no-escaflowne-bd-batch-subtitle-indonesia`

```json
{
  "creator": "VTX Group",
  "title": "Tenkuu no Escaflowne BD Batch Subtitle Indonesia",
  "japanese_title": "天空のエスカフローネ",
  "type": "TV Series",
  "status": "Completed",
  "total_episode": 26,
  "score": 7.65,
  "duration": "24 min. per ep.",
  "aired": "Apr 02, 1996",
  "genre": [
    "Action",
    "Adventure",
    "Fantasy",
    "Mecha",
    "Psychological",
    "Romance"
  ],
  "producers": [
    "TV Tokyo",
    "Bandai Visual",
    "Omnibus Promotion"
  ],
  "banner": "https://kusonime.com/wp-content/uploads/2025/03/Tenkuu-no-Escaflowne.jpg",
  "synopsis_id": "Tenkuu no Escaflowne bercerita tentang Hitomi Kanzaki, siswi 15 tahun yang suka ramalan...",
  "subtitle_info": "Credit: GBloverz",
  "kusonime_url": "https://kusonime.com/escaflowne-bd-batch-subtitle-indonesia/",
  "download_links": {
    "480p": {
      "google_sharer": "https://acefile.co/f/108833380/kusonime-tenkuu-no-escaflowne-bd-480p-rar",
      "google_drive": "https://drive.usercontent.google.com/download?id=1q5Icq0IHg0svPPz8WYCLf-mMuq9ymVns&export=download&authuser=0",
      "pixeldrain": "https://pixeldrain.com/u/cCrPeQq1",
      "terabox": "https://1024terabox.com/s/1LKGJ8DzHZLrtttYoXf7sAQ",
      "hxfileco": "https://hxfile.co/d24qh3j8985p",
      "mega": "https://mega.nz/file/tt4AjLpb#dSV4IDLNsShdWuA4FMYNqSR12Wljwec59w091NPcrPQ",
      "buzzheavier": "https://buzzheavier.com/gqex2xb0wkde"
    }
  }
}
```

---

## 🚀 Cara Menjalankan (Development)

```bash
git clone https://github.com/vtxgroup/kusonime.git
cd kusonime
npm install
npm run dev
```

> Pastikan kamu menggunakan **Node.js v18+**

---

## 📦 Deployment

Kamu bisa deploy ke platform berikut:

- [Vercel](https://vercel.com)
- [Replit](https://replit.com)
- [Render](https://render.com)

## Contact

**Email:** [fort@vtxgroup.my.id](mailto\:fort@vtxgroup.my.id)\
**Website:** [https://vtxgroup.my.id](https://vtxgroup.my.id)
