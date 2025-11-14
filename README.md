Sebuah aplikasi web sederhana untuk menampilkan dan membaca artikel seputar travelling
Demo langsung: [https://article-web-app-pi.vercel.app]

Aturan Penamaan:
| Jenis | Format | Contoh |
|------|--------|--------|
| Komponen React | `PascalCase` | `ArticleCard.jsx`, `Navbar.jsx` |
| File & Folder | `kebab-case` | `article-list/`, `format-date.js` |
| Variabel & Fungsi | `camelCase` | `getArticles`, `isLoading` |
| Konstanta | `UPPER_SNAKE_CASE` | `API_BASE_URL` |
| Aset (gambar, ikon) | `kebab-case` | `hero-banner.jpg` |

Contoh Struktur Folder:
src/
├── components/
│   ├── ArticleCard.jsx
│   └── Navbar.jsx
├── pages/
│   ├── Home.jsx
│   └── ArticleDetail.jsx
├── data/
│   └── articles.json
├── styles/
│   └── globals.css
└── utils/
└── helpers.js

## Tech Stack

| Kategori | Teknologi |
|----------|-----------|
| **Framework** | React.js + Vite |
| **Styling** | Tailwind CSS |
| **Routing** | React Router DOM |
| **Bahasa** | JavaScript (ES6+) |
| **State** | React Hooks (`useState`, `useEffect`) |
| **Deployment** | Vercel |
| **Code Quality** | ESLint + Prettier |

---

## Cara Instalasi & Menjalankan Proyek

1. Clone repository
git clone https://github.com/<username-mu>/article-web-app.git
[cd article-web-app](https://github.com/zahrasabila/article-web-app.git)

2. Install dependencies
npm install

3. Jalankan di lokal
npm run dev
Buka http://localhost:5173 di browser.

Fitur Aplikasi
- Daftar artikel
- Loading state with skeleton & error handling
- Filter by category
- Search articles
