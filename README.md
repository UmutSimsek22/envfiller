<div align="center">
  <h1>📋 EnvFiller — Sınav Zarfı Teslim Tutanağı Editörü</h1>
  <p><strong>İstanbul Esenyurt Üniversitesi için Form Doldurma, Canlı A4 Önizleme ve Otomatik Word (.docx) Çıktı Üretim Sistemi</strong></p>
  <p>
    <img src="https://img.shields.io/badge/Next.js-16.2.11-black?logo=next.js" alt="Next.js">
    <img src="https://img.shields.io/badge/React-19.2.3-blue?logo=react" alt="React">
    <img src="https://img.shields.io/badge/TailwindCSS-v4-38bdf8?logo=tailwind-css" alt="Tailwind CSS">
    <img src="https://img.shields.io/badge/TypeScript-5-blue?logo=typescript" alt="TypeScript">
    <img src="https://img.shields.io/badge/License-MIT-green" alt="License">
  </p>
</div>

---

## 📌 Proje Hakkında

**EnvFiller**, üniversite sınav evrakları teslim süreçlerini dijitalleştiren ve hızlandıran modern bir web uygulamasıdır. Akademisyenlerin ve sınav sorumlularının **Sınav Zarfı Teslim Tutanağı** ve **Notlar** sayfalarını kullanıcı dostu sekmeli bir form üzerinden doldurmasına, sağ tarafta dikey sıralı 2 sayfa A4 formatında anlık olarak önizlemesine ve tek tıkla doldurulmuş resmi Microsoft Word (`.docx`) belgesini indirmesine olanak tanır.

---

## ✨ Temel Özellikler

- ⚡ **Gerçek Zamanlı Canlı Önizleme (Split-Screen):** Sol tarafta form doldurulurken, sağ taraftaki 2 sayfalık A4 simülasyonunda yapılan tüm değişiklikler sıfır gecikmeyle (anlık) görüntülenir.
- 📄 **İstemci Taraflı (Client-Side) `.docx` Üretimi:** `pizzip` ve `docxtemplater` kütüphaneleri sayesinde belge üretimi tamamen kullanıcının tarayıcısında gerçekleşir; sunucuya veri göndermez, gizlilik dostudur ve çevrimdışı (offline) çalışabilir.
- 💾 **Taslak / Şablon Yönetimi (Presets):** Farklı dersler veya bölümler için girilen form verileri `LocalStorage` kullanılarak özel taslak adıyla kaydedilebilir, daha sonra tek tıkla yeniden yüklenebilir veya silinebilir.
- 🏛️ **Kurumsal Görsel Kimlik:** İstanbul Esenyurt Üniversitesi'nin kurumsal Lacivert (`#1F3860`) ve Altın (`#C5A059`) renk paletiyle uyumlu, temiz ve profesyonel arayüz.
- 🖨️ **A4 Baskı Uyumluluğu:** İndirilen Word belgesi beyaz A4 kağıda yazdırılmaya tam uyumlu satır, sütun ve kenar boşluklarına sahiptir.
- 🧩 **Modüler & Genişletilebilir Kod Yapısı:** Yeni form şablonları veya evrak türleri eklemeye hazır bileşen mimarisi.

---

## 🛠️ Teknoloji Yığını

| Alan | Teknoloji | Açıklama |
|---|---|---|
| **Framework** | Next.js 16 (App Router) & React 19 | Yüksek performanslı SSR/CSR hibrit mimari |
| **Dil** | TypeScript 5 | Tip güvenliği ve ölçeklenebilirlik |
| **Stil / CSS** | Tailwind CSS v4 & tw-animate-css | Modern, responsive ve kurumsal tema |
| **Word İşleme** | `docxtemplater` & `pizzip` | `.docx` şablonunu client-side parse etme ve doldurma |
| **Dosya İndirme**| `file-saver` | Tarayıcı üzerinden blob dosya indirme tetikleyici |
| **İkonlar** | `lucide-react` | Arayüz butonları ve sekme ikonları |

---

## 🚀 Kurulum ve Çalıştırma

### Gereksinimler
- **Node.js**: v20 veya üzeri (Node v22 önerilir)
- **npm** / **yarn** / **pnpm**

### 1. Depoyu Klonlayın
```bash
git clone https://github.com/UmutSimsek22/envfiller.git
cd envfiller
```

### 2. Bağımlılıkları Yükleyin
```bash
cd web
npm install
```

### 3. Geliştirme Sunucusunu Başlatın
```bash
npm run dev
```

Tarayıcınızda açın:
👉 **[http://localhost:3000/tutanak-olusturucu](http://localhost:3000/tutanak-olusturucu)**

### 4. Üretim Derlemesi (Build)
```bash
npm run build
npm run start
```

---

## 📁 Proje Dosya Yapısı

```
envfiller/
├── web/
│   ├── public/
│   │   ├── sinav_zarfi_tutanak.docx          # Orijinal Word (.docx) şablonu
│   │   └── images/
│   │       └── iesu-icon.svg                 # Kurumsal favicon / logo
│   ├── src/
│   │   ├── app/
│   │   │   ├── layout.tsx                    # Ana kök layout
│   │   │   └── tutanak-olusturucu/
│   │   │       ├── page.tsx                  # Ana editör sayfası (Split-Screen container)
│   │   │       ├── layout.tsx                # Tutanak rotası metadata ve favicon layout'u
│   │   │       └── icon.svg                  # Rota bazlı favicon
│   │   └── components/
│   │       └── tutanak-olusturucu/
│   │           ├── FormPanel.tsx             # 4 Adımlı sekmeli form giriş bileşeni
│   │           ├── PreviewPanel.tsx          # 2 Sayfalık A4 dikey canlı önizleme
│   │           ├── PresetManager.tsx         # LocalStorage taslak kaydetme/yükleme
│   │           ├── docx-helper.ts            # Client-side docx doldurma ve indirme motoru
│   │           └── types.ts                  # TypeScript veri modelleri ve sabitler
├── envelope-filler-tech.md                   # Teknik şartname ve mimari plan
├── envelope-filler-dev.md                    # Geliştirici görev listesi ve kılavuz
└── README.md                                 # Proje ana dokümantasyonu
```

---

## 📝 Şablon Değişkenleri (Placeholders)

Word şablonu içerisindeki dinamik alanlar:

- `{{SINAV_TARIHI}}`, `{{GOZETMEN}}`, `{{EGITIM_YILI}}`, `{{YARIYIL}}`
- `{{CHECK_LISANSUSTU}}`, `{{CHECK_LISANS}}`, `{{CHECK_ONLISANS}}`
- `{{BOLUM_PROGRAM}}`, `{{DERS_KODU}}`, `{{DERS_ADI}}`, `{{OGRET_ELEMANI}}`, `{{SINAV_CESIDI}}`
- `{{CHECK_DOC_1}}` ... `{{CHECK_DOC_9}}` *(Zarf içi belge onayları)*
- `{{TESLIM_EDEN_AD}}`, `{{TESLIM_EDEN_TARIH}}`
- `{{TESLIM_ALAN_AD}}`, `{{TESLIM_ALAN_TARIH}}`
- `{{KONTROL_EDEN_AD}}`, `{{KONTROL_EDEN_TARIH}}`

---

## 📄 Lisans

Bu proje [MIT Lisansı](LICENSE) altında sunulmaktadır.
